"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown, Check } from "lucide-react";

interface DoNotShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const B2B_COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "United Arab Emirates",
  "India",
  "Japan",
  "Netherlands",
  "Ireland",
  "South Africa",
  "Brazil",
  "Mexico",
  "Other"
];

export function DoNotShareModal({ isOpen, onClose }: DoNotShareModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    agreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/optout-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            jobTitle: "",
            country: "",
            agreement: false
          });
        }, 3000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
                  Do Not Share or Sell My Personal Information
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              </div>

              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-slate-400" />
              </button>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted</h3>
                  <p className="text-slate-500 max-w-sm">
                    We have received your request. Your personal information preference will be updated across our systems.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div className="space-y-1.5">
                      <input
                        required
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    {/* Last Name */}
                    <div className="space-y-1.5">
                      <input
                        required
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <input
                        required
                        type="text"
                        name="company"
                        placeholder="Company Name*"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    {/* Job Title */}
                    <div className="space-y-1.5">
                      <input
                        required
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title*"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    {/* Select Country */}
                    <div className="md:col-span-2 relative">
                      <select
                        required
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400 appearance-none bg-transparent"
                      >
                        <option value="" disabled>Select Country*</option>
                        {B2B_COUNTRIES.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="relative flex h-5 items-center">
                      <input
                        required
                        id="agreement"
                        name="agreement"
                        type="checkbox"
                        checked={formData.agreement}
                        onChange={handleChange}
                        className="h-5 w-5 rounded-md border-slate-200 text-primary focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <label htmlFor="agreement" className="text-sm leading-relaxed text-slate-500 font-medium cursor-pointer">
                      I agree to provide my contact information and allow ProspectOutreach to contact me and provide updates through email, phone, web, or postal communication. Data is handled as per <a href="/privacy-policy" className="text-primary hover:underline" target="_blank">privacy policy.</a>
                    </label>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 flex flex-col items-center gap-4">
                    {error && (
                      <p className="text-sm font-medium text-red-500 text-center">{error}</p>
                    )}
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="group relative inline-flex h-12 w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 px-8 text-base font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
