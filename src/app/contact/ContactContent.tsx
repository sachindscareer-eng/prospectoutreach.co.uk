"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const MOBILE_DISPLAY = "995 995 3818";
const MOBILE_TEL = "+919959953818";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your goals and we&apos;ll help you get there.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="h-full border-border bg-muted/30">
              <CardHeader>
                <h2 className="text-lg font-semibold">Contact Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:sales@prospectoutreach.co.uk"
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      sales@prospectoutreach.co.uk
                    </a>
                    <a
                      href="mailto:info@prospectoutreach.co.uk"
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      info@prospectoutreach.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Mobile</p>
                    <a
                      href={`tel:${MOBILE_TEL}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {MOBILE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Kharadi, Pune
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <Card className="flex flex-col items-center justify-center py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Message sent</h3>
                <p className="mt-2 text-center text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold">Send a message</h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll respond as soon as we can.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error ? (
                      <p
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                        role="alert"
                      >
                        {error}
                      </p>
                    ) : null}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="How can we help?"
                      />
                    </div>
                    <Button type="submit" size="lg" disabled={loading}>
                      {loading ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
