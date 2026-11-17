"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

interface CcpaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CcpaModal({ isOpen, onClose }: CcpaModalProps) {
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
                  PRIVACY POLICY - CCPA
                </h2>
                <p className="text-primary font-semibold mt-2">
                  Additional Notice for California Residents
                </p>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="space-y-8 text-slate-600 leading-relaxed max-w-3xl">
                  
                  <section className="space-y-3">
                    <p>
                      We may share your personal information with our subsidiaries, affiliates, advertising partners, and clients. These parties may use this information to personalize and deliver relevant advertisements and content across their platforms, as well as to enhance your overall marketing experience.
                    </p>
                    <p>
                      In some cases, our partners may also use and share this information for their own business purposes. For more details on how your data is handled, please refer to our Privacy Policy.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex gap-3 mt-4">
                      <ShieldCheck className="h-6 w-6 text-yellow-600 shrink-0" />
                      <p className="text-sm text-yellow-800">
                        <strong className="font-bold">Important Notice:</strong> Under the California Consumer Privacy Act (CCPA), certain types of data sharing may be classified as a &quot;sale&quot; of personal information.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      Your Choices
                    </h3>
                    <p>
                      You have control over how your personal information is shared.
                    </p>
                    <p>
                      If you prefer that we (or our partners) do not share or sell your personal information for the purposes described above, you can opt out by updating your preferences.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm mt-4">
                      <p className="mb-2">
                        <strong className="font-semibold text-slate-900">Technical Note:</strong> Your preferences are stored using cookies. If you access our website from a different device or browser, or if you clear your cookies, you will need to set your preferences again.
                      </p>
                      <p>
                        Please note that it may take up to 60 days to process your &quot;Do Not Share or Sell My Personal Information&quot; request.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      Your Rights Under the CCPA
                    </h3>
                    <p>
                      If you are a California resident, you are entitled to the following rights:
                    </p>
                    <div className="grid gap-3 sm:grid-cols-1 mt-4">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block">Right to Know:</strong>
                          <span className="text-sm">Request details about the personal information we collect, including categories of data, sources, purposes of use, and any third parties with whom the information is shared or sold.</span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block">Right to Access:</strong>
                          <span className="text-sm">Request a copy of the personal information we have collected about you over the past 12 months.</span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block">Right to Delete:</strong>
                          <span className="text-sm">Request deletion of your personal information from our records, subject to certain exceptions.</span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block">Right to Opt-Out:</strong>
                          <span className="text-sm">Request that your personal information not be sold to third parties.</span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block">Right to Non-Discrimination:</strong>
                          <span className="text-sm">You will not be denied services, charged different prices, or receive a lower quality of service for exercising your rights.</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      Request Process & Timeline
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>You may submit up to two requests within a 12-month period.</li>
                      <li><strong className="font-semibold text-slate-900">Identity Verification:</strong> To protect your data, we may request additional information to verify your identity before processing your request.</li>
                      <li><strong className="font-semibold text-slate-900">Response Time:</strong> We will respond within 60 days of receiving a verified request. If needed, this period may be extended by an additional 45 days, and you will be notified accordingly.</li>
                    </ul>
                  </section>
                  
                  <section className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-6 rounded-full bg-primary" />
                      How to Exercise Your Rights
                    </h3>
                    <p>You can submit a request using any of the following methods:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-2">
                        <FileText className="w-6 h-6 text-primary" />
                        <strong className="text-slate-900 text-sm">Online Form</strong>
                        <p className="text-xs">Submit your request via our secure web portal</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-2">
                        <FileText className="w-6 h-6 text-primary" />
                        <strong className="text-slate-900 text-sm">Email</strong>
                        <p className="text-xs">Contact our privacy team directly</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-2">
                        <FileText className="w-6 h-6 text-primary" />
                        <strong className="text-slate-900 text-sm">Opt-Out</strong>
                        <p className="text-xs">Use the &quot;Do Not Share or Sell My Personal Information&quot; option available on our website</p>
                      </div>
                    </div>
                  </section>

                  <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Commitment to Data Protection</h3>
                    <p className="text-slate-800 font-medium mb-4">
                      We are committed to safeguarding your personal information. In addition to complying with CCPA requirements, we also:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Follow GDPR principles for global data protection
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Implement industry-standard security measures, including encryption
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Conduct regular privacy audits and risk assessments
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Provide ongoing employee training on data protection and privacy best practices
                      </li>
                    </ul>
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
