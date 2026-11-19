"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const expectationSteps = [
  {
    title: "Quick response",
    description: "Our team reviews your inquiry quickly and shares clear next steps.",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Personalized consultation",
    description: "We understand your goals, ICP, and current pipeline challenges.",
    color: "from-cyan-500 to-primary",
  },
  {
    title: "Tailored strategy",
    description: "You receive a custom demand and outreach plan built for your market.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Seamless onboarding",
    description: "We launch quickly and keep operations simple for your team.",
    color: "from-amber-500 to-orange-600",
  },
];

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Spam protection: check honeypot
    if (formData.get("_hp_phone")) {
      console.log("Spam detected!");
      setSubmitted(true); // Don't let the bot know it failed
      return;
    }

    setLoading(true);
    try {
      // Use URLSearchParams for application/x-www-form-urlencoded
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        if (!key.startsWith("_hp_")) {
          body.append(key, value.toString());
        }
      });

      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const data = await res.json();
      if (data.status === "success") {
        form.reset();
        setSubmitted(true);
      } else {
        setError(data.message || "Error sending message. Please check your details and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-24">
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact us
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Elevate your brand story
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions or want to collaborate? Send us a message and our
            team will get back within 1 business day.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-5"
          >
            <Card className="border border-border/80 bg-white/90 p-6 shadow-soft sm:p-7">
              <h2 className="text-xl font-semibold text-foreground">What to Expect</h2>
              <div className="mt-5 space-y-5">
                {expectationSteps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white",
                        step.color
                      )}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-border/70 pt-6">
                <h3 className="text-base font-semibold text-foreground">
                  Contact Information
                </h3>
                <div className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl bg-muted/35 px-3 py-2.5">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-fuchsia-500/15 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Email</p>
                      <p><a href="mailto:sales@prospectoutreach.co.uk" className="hover:text-primary transition-colors">sales@prospectoutreach.co.uk</a></p>
                      <p><a href="mailto:info@prospectoutreach.co.uk" className="hover:text-primary transition-colors">info@prospectoutreach.co.uk</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-muted/35 px-3 py-2.5">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-primary/20 text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Mobile</p>
                      <p><a href="tel:+447915378769" className="hover:text-primary transition-colors">+44 7915 378769</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-muted/35 px-3 py-2.5">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/20 to-amber-500/20 text-fuchsia-600">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Location</p>
                      <p>21 N Main St #1022, Milltown, NJ 08850, United States</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.instagram.com/prospectoutreach" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 rounded-2xl bg-muted/35 px-3 py-2.5 hover:bg-muted/50 transition-all group"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 text-fuchsia-600 group-hover:scale-110 transition-transform">
                      <Instagram className="h-4 w-4" />
                    </span>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Instagram</p>
                      <p>@prospectoutreach</p>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/prospectoutreach/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 rounded-2xl bg-muted/35 px-3 py-2.5 hover:bg-muted/50 transition-all group"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 text-primary group-hover:scale-110 transition-transform">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
                      <p>ProspectOutreach</p>
                    </div>
                  </a>
                </div>
              </div>
            </Card>

            <div className="rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/5 to-fuchsia-500/5 p-6 sm:p-7">
              <p className="text-sm font-semibold text-primary">
                Trusted by 45+ Clients Worldwide
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Join leading B2B brands across North America, EMEA, and APAC who
                trust ProspectOutreach for demand generation and outreach.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="rounded-[1.6rem] bg-gradient-to-r from-primary/35 via-fuchsia-500/35 to-cyan-500/35 p-[1.5px]">
                <Card className="flex min-h-[520px] flex-col items-center justify-center border-0 bg-white">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-2 text-center text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </Card>
              </div>
            ) : (
              <div className="rounded-[1.6rem] bg-gradient-to-r from-primary/35 via-fuchsia-500/35 to-cyan-500/35 p-[1.5px] shadow-soft">
                <Card className="border-0 bg-white">
                  <CardHeader>
                    <h2 className="text-xl font-semibold text-foreground">Send Message</h2>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot field */}
                      <input type="text" name="_hp_phone" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                      
                      {error ? (
                        <p
                          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                          role="alert"
                        >
                          {error}
                        </p>
                      ) : null}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="yourname@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="mobile" className="text-sm font-medium text-foreground">
                          Mobile Number
                        </label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="companyWebsite" className="text-sm font-medium text-foreground">
                        Company Website *
                      </label>
                      <input
                        id="companyWebsite"
                        name="companyWebsite"
                        type="text"
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="yourcompany.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                      <Button type="submit" size="lg" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
