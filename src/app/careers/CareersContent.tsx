"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Upload, Briefcase, GraduationCap, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Global Reach",
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Accelerated Mentorship",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Freedom to Execute",
    icon: <Zap className="h-5 w-5" />,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "People-First Culture",
    icon: <Users className="h-5 w-5" />,
    color: "from-emerald-500 to-teal-600",
  },
];

const values = [
  {
    title: "COLLABORATE",
    description: "We thrive on a culture of collective genius. By blending our unique strengths, we don't just achieve results, we ignite innovation and fuel each other’s professional evolution.",
  },
  {
    title: "Assessment",
    description: "We fuel a culture of relentless inquiry. Here, you’re empowered to pilot bold strategies and transform every outcome, win or lose, into a blueprint for future excellence.",
  },
  {
    title: "GROW",
    description: "We don’t just scale businesses; we scale people. As you sharpen your skills and push your limits, you reshape our collective vision and drive the future of our industry.",
  },
];

export function CareersContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/apply-mail.php", {
        method: "POST",
        body: formData, // No headers needed for FormData, browser sets it
      });

      const data = await res.json();
      if (data.status === "success") {
        setSubmitted(true);
      } else {
        setError(data.message || "Error submitting application.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-fuchsia-300/15 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Careers
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Shaping Growth Together
          </h1>
          <p className="mt-6 text-xl font-medium text-foreground/80">
            Be part of a team that invests in you
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Passion. Performance. Impact. We value the drive it takes to deliver results. 
            Join a team where your creativity has a purpose.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 rounded-3xl border border-border/50 bg-white/50 p-6 text-center backdrop-blur-sm shadow-soft"
            >
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", benefit.color)}>
                {benefit.icon}
              </div>
              <span className="font-semibold text-foreground text-sm uppercase tracking-wide">
                {benefit.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Apply Section */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground">Join Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready to join our mission? Submit your profile to discover open roles and grow alongside us.
              </p>
            </div>

            <div className="space-y-8">
              {values.map((v) => (
                <div key={v.title} className="group flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-fuchsia-600 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {submitted ? (
              <Card className="flex min-h-[500px] flex-col items-center justify-center p-8 text-center border-2 border-primary/20 bg-white/80 backdrop-blur-xl rounded-[2rem]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Application Received!</h3>
                <p className="mt-4 text-muted-foreground text-lg">
                  Thank you for your interest in ProspectOutreach. Our HR team will review your profile and get back to you soon.
                </p>
                <Button variant="outline" className="mt-8 rounded-full px-8" onClick={() => setSubmitted(false)}>
                  Apply for another role
                </Button>
              </Card>
            ) : (
              <div className="rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-fuchsia-500/20 to-transparent p-[1.5px] shadow-2xl">
                <Card className="border-0 bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-[2.4rem]">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Apply Now</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                        {error}
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">First Name *</label>
                        <input name="firstName" required className="w-full rounded-2xl border border-border/60 bg-white px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="John" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Last Name</label>
                        <input name="lastName" className="w-full rounded-2xl border border-border/60 bg-white px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Email Address *</label>
                      <input name="email" type="email" required className="w-full rounded-2xl border border-border/60 bg-white px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Mobile Number</label>
                      <input name="mobile" type="tel" className="w-full rounded-2xl border border-border/60 bg-white px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" placeholder="+44 7700 900000" />
                    </div>

                    <div className="relative space-y-1.5 pt-2">
                      <p className="text-sm font-semibold text-foreground/80 ml-1 mb-2">Upload Resume (PDF/DOC) *</p>
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-[1.5rem] bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors mb-2" />
                          <p className="text-sm font-medium text-foreground/70">
                            {fileName ? <span className="text-primary font-bold">{fileName}</span> : "Click to select or drag and drop"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">PDF, DOC up to 5MB</p>
                        </div>
                        <input name="resume" type="file" required accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 mt-4" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Profile"}
                    </Button>
                  </form>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
