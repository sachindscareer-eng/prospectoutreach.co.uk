"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface GdprModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GdprModal({ isOpen, onClose }: GdprModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 flex flex-col pointer-events-auto overflow-hidden"
            >
              {/* Header - Fixed */}
              <div className="flex-none p-6 sm:p-8 border-b border-slate-100 bg-white/80 backdrop-blur-md relative z-10">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6 text-slate-400" />
                </button>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 pr-12">
                  GDPR Compliance
                </h2>
                <p className="text-primary font-semibold mt-2">
                  Your Data. Your Rights. Our Responsibility.
                </p>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="space-y-8 text-slate-600 leading-relaxed max-w-3xl">
                  
                  <section>
                    <p className="text-lg">
                      At Prospectoutreach Private Limited, data privacy is not just a requirement, it&apos;s a core part of how we operate. We are fully aligned with the General Data Protection Regulation (GDPR), ensuring your data is handled with transparency, security, and accountability.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      Understanding GDPR
                    </h3>
                    <p>
                      The General Data Protection Regulation (GDPR), effective May 25, 2018, sets the standard for data protection across the European Union. It governs how organizations collect, store, and use personal data — creating a safer, more transparent digital ecosystem.
                    </p>
                    <p>
                      GDPR applies to any business that processes the data of EU residents, regardless of where that business is located.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      Why It Matters
                    </h3>
                    <p>
                      Non-compliance isn&apos;t just a risk, it&apos;s a liability.
                    </p>
                    <p>
                      Organizations can face fines of up to €20 million or 4% of annual global turnover, whichever is higher. More importantly, failing to comply can damage trust, and trust is everything in today&apos;s data-driven world.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      Our Legal Basis: Legitimate Interest
                    </h3>
                    <p>
                      We process business contact data under the lawful basis of Legitimate Interest, as recognized under GDPR.
                    </p>
                    <p>
                      This allows us to support B2B organizations with relevant, targeted outreach while ensuring:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Communication remains professional and business-relevant</li>
                      <li>Individuals are not unfairly impacted</li>
                      <li>Every contact has a clear and simple opt-out option</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      How We Stay GDPR-Compliant
                    </h3>
                    <p>
                      We don&apos;t just meet requirements, we build systems around them:
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 mt-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Precision Targeting
                        </h4>
                        <p className="text-sm">We enable meaningful B2B connections by ensuring outreach is relevant and purposeful.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Verified Data Sources
                        </h4>
                        <p className="text-sm">All data is sourced from credible, compliant, and verifiable channels.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Continuous Data Accuracy
                        </h4>
                        <p className="text-sm">Our data is regularly updated and validated to maintain reliability.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Enterprise-Grade Security
                        </h4>
                        <p className="text-sm">We implement strong technical and organizational safeguards, including a robust data breach response framework.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 sm:col-span-2">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Full Data Control for Individuals
                        </h4>
                        <p className="text-sm">Individuals can request access, correction, restriction, or deletion of their data at any time — quickly and easily.</p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      What Data We Process
                    </h3>
                    <p>To support legitimate business use cases, we process:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Professional Names</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Business Email Addresses</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Job Titles</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Company Information</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Business Contact Details</li>
                    </ul>
                    <p className="mt-4 pt-2 border-t border-slate-100">
                      All data is processed in accordance with GDPR principles of lawfulness, fairness, and transparency.
                    </p>
                  </section>

                  <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Promise</h3>
                    <p className="text-slate-800 font-medium">
                      We are committed to helping our clients grow responsibly — without compromising on privacy, compliance, or trust.
                    </p>
                  </section>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
