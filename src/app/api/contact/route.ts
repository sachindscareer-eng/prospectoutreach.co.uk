import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_SALES = "sales@prospectoutreach.co.uk";
const TO_INFO = "info@prospectoutreach.co.uk";
const SEND_TIMEOUT_MS = 15000;

const MAX = { name: 200, company: 200, message: 8000 };

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Set RESEND_API_KEY on the server." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { name, email, company, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const nameTrim = name.trim().slice(0, MAX.name);
  const emailTrim = email.trim().toLowerCase();
  const companyTrim =
    typeof company === "string" ? company.trim().slice(0, MAX.company) : "";
  const messageTrim = message.trim().slice(0, MAX.message);

  const testRecipient = process.env.CONTACT_TEST_RECIPIENT?.trim();
  const fromEnv = process.env.CONTACT_FROM_EMAIL?.trim();
  const from =
    fromEnv || (testRecipient ? "ProspectOutreach <onboarding@resend.dev>" : "");

  if (!from) {
    return NextResponse.json(
      {
        error:
          "CONTACT_FROM_EMAIL is required for real sending. Verify your sender/domain in Resend (and ensure CONTACT_FROM_EMAIL uses a verified domain).",
      },
      { status: 503 }
    );
  }

  const text = [
    "New enquiry from the ProspectOutreach website contact form.",
    "",
    `Name: ${nameTrim}`,
    `Email: ${emailTrim}`,
    `Company: ${companyTrim || "—"}`,
    "",
    "Message:",
    messageTrim,
  ].join("\n");

  const resend = new Resend(apiKey);
  const sendPromise = resend.emails.send({
    from,
    to: testRecipient ? [testRecipient] : [TO_SALES, TO_INFO],
    replyTo: emailTrim,
    subject: `Website enquiry from ${nameTrim}`,
    text,
  });

  const timeoutPromise = new Promise<{ error: { message: string } }>((resolve) => {
    setTimeout(() => resolve({ error: { message: "Email request timed out." } }), SEND_TIMEOUT_MS);
  });

  const { error } = await Promise.race([sendPromise, timeoutPromise]);

  if (error) {
    console.error("[contact]", error);
    if (
      error.message.includes("verify a domain") ||
      error.message.includes("testing emails")
    ) {
      return NextResponse.json(
        {
          error:
            "Resend is restricting non-test sending. Verify your domain/sender in Resend (and ensure CONTACT_FROM_EMAIL uses a verified domain). For local testing, set CONTACT_TEST_RECIPIENT.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
