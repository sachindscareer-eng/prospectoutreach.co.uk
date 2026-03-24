import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_SALES = "sales@prospectoutreach.co.uk";
const TO_INFO = "info@prospectoutreach.co.uk";

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

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "ProspectOutreach <onboarding@resend.dev>";

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
  const { error } = await resend.emails.send({
    from,
    to: [TO_SALES, TO_INFO],
    replyTo: emailTrim,
    subject: `Website enquiry from ${nameTrim}`,
    text,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
