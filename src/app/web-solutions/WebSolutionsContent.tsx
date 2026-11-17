"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Layout, Settings, Shield, Cloud, FileText, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Web Application Development",
    desc: "Powerful, scalable, fully customized applications tailored to your business goals — fast, secure, and built to grow.",
    items: [
      "End-to-end development (frontend + backend)",
      "Clean, modern, and responsive UI",
      "Scalable architecture for future growth",
      "Seamless API integrations",
    ],
    color: "emerald",
  },
  {
    number: "02",
    icon: Layout,
    title: "Modern UI/UX & Interactive Dashboards",
    desc: "Interfaces that are visually stunning and highly functional — helping users understand data and make decisions faster.",
    items: [
      "Beautiful and intuitive designs",
      "Interactive dashboards with real-time data",
      "Smooth animations and transitions",
      "Mobile-friendly and responsive layouts",
    ],
    color: "blue",
  },
  {
    number: "03",
    icon: Settings,
    title: "Advanced Visualization Systems",
    desc: "Complex, data-driven visualization platforms for engineering and manufacturing — making intricate workflows simple and interactive.",
    items: [
      "Dynamic diagram and schematic rendering",
      "Real-time data visualization",
      "Interactive elements (zoom, pan, actions)",
      "High-performance rendering for large datasets",
    ],
    color: "orange",
  },
  {
    number: "04",
    icon: Shield,
    title: "Secure Authentication & User Management",
    desc: "Robust, reliable systems to manage users, roles, and access control — built with security as the foundation.",
    items: [
      "Role-based access (Admin, User, etc.)",
      "Secure login & authentication",
      "Data protection best practices",
      "Multi-user system support",
    ],
    color: "emerald",
  },
  {
    number: "05",
    icon: Cloud,
    title: "Cloud Deployment & Infrastructure",
    desc: "We take your application from code to production — managing deployment, scaling, and performance on your preferred cloud.",
    items: [
      "Deployment on AWS or preferred cloud",
      "Database setup & optimization",
      "File storage (documents, media)",
      "Ongoing support for uptime & performance",
    ],
    color: "blue",
  },
  {
    number: "06",
    icon: FileText,
    title: "File & Document Management Solutions",
    desc: "Efficient systems for handling documents from upload to storage — with automation that saves time and reduces manual work.",
    items: [
      "PDF generation and processing",
      "Secure file uploads",
      "Cloud storage integration (AWS S3)",
      "Automated workflows",
    ],
    color: "orange",
  },
  {
    number: "07",
    icon: Building2,
    title: "Business Automation & CRM Solutions",
    desc: "Smart systems that help businesses automate operations, improve efficiency, and make data-driven decisions — at any scale.",
    items: [
      "Custom CRM systems",
      "Admin dashboards & reporting",
      "Workflow automation",
      "Scalable business tools",
    ],
    color: "emerald",
    fullWidth: true,
  },
];

export function WebSolutionsContent() {
  return (
    <div className="min-h-screen bg-[#080C10] text-[#E8EDF2] font-dmSans selection:bg-[#00E5A0]/30 selection:text-[#00E5A0] relative overflow-x-hidden">
      {/* NOISE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.15] mix-blend-overlay">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(0,229,160,0.08)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,153,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/20 text-[#00E5A0] font-syne font-semibold text-xs tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
          What We Do
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-syne text-5xl md:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8"
        >
          We Build <span className="bg-gradient-to-br from-[#00E5A0] to-[#0099FF] bg-clip-text text-transparent">Solutions,</span><br />Not Just Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-lg md:text-xl text-[#7A8A99] font-light mb-10"
        >
          End-to-end web development, design systems, and cloud infrastructure — crafted to scale with your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button size="lg" className="bg-[#00E5A0] text-[#080C10] hover:bg-[#00ffb2] font-syne font-bold px-8 h-14 rounded-md shadow-[0_0_40px_rgba(0,229,160,0.2)] transition-all hover:-translate-y-1" asChild>
            <Link href="#services">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#7A8A99] text-[10px] tracking-[0.2em] uppercase"
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#7A8A99] to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/40"
            />
          </div>
          Scroll
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20">
          <div className="flex items-center gap-4 text-[#00E5A0] font-syne text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <div className="w-6 h-px bg-[#00E5A0]" />
            What We Offer
          </div>
          <h2 className="font-syne text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Full-Stack Expertise<br />Across Every Layer
          </h2>
          <p className="max-w-xl text-[#7A8A99] text-lg font-light">
            From concept to deployment — we handle everything so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-[#111820] p-10 relative group transition-colors hover:bg-[#151E28] ${service.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_0%_0%,_rgba(${service.color === 'emerald' ? '0,229,160' : service.color === 'blue' ? '0,153,255' : '255,107,53'},0.04)_0%,_transparent_60%)]`} />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                  service.color === 'emerald' ? 'bg-[#00E5A0]/10 border-[#00E5A0]/20 text-[#00E5A0]' :
                  service.color === 'blue' ? 'bg-[#0099FF]/10 border-[#0099FF]/20 text-[#0099FF]' :
                  'bg-[#FF6B35]/10 border-[#FF6B35]/20 text-[#FF6B35]'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="font-syne text-[10px] font-bold text-white/10 tracking-widest uppercase">
                  {service.number}
                </span>
              </div>

              <h3 className="font-syne text-xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-[#7A8A99] text-sm leading-relaxed font-light mb-8 relative z-10">{service.desc}</p>

              <ul className={`space-y-2 relative z-10 ${service.fullWidth ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8' : ''}`}>
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs text-[#E8EDF2]/70">
                    <div className={`w-4 h-[1px] shrink-0 ${
                      service.color === 'emerald' ? 'bg-[#00E5A0]' :
                      service.color === 'blue' ? 'bg-[#0099FF]' :
                      'bg-[#FF6B35]'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto bg-[#0E1419] border border-white/10 rounded-[2rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(0,229,160,0.05)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 text-[#00E5A0] font-syne text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                <div className="w-6 h-px bg-[#00E5A0]" />
                Why Choose Us
              </div>
              <h2 className="font-syne text-4xl font-extrabold tracking-tight mb-10">
                Built to Solve Real Business Problems
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: "Deep Technical Expertise", desc: "Strong capabilities in complex, scalable systems across the full stack." },
                  { title: "Performance & Usability First", desc: "Every decision is guided by performance, long-term growth, and user experience." },
                  { title: "Reliable Support & Iteration", desc: "We stay with you beyond launch — continuously improving and scaling with your needs." },
                  { title: "Solutions, Not Just Code", desc: "We build software that solves real problems — not just code that runs." },
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#00E5A0] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-syne font-bold text-sm mb-1">{point.title}</h4>
                      <p className="text-[#7A8A99] text-xs font-light leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[1px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {[
                { val: "100%", label: "Custom Built" },
                { val: "7+", label: "Service Areas" },
                { val: "AWS", label: "Cloud Ready" },
                { val: "24/7", label: "Ongoing Support" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#111820] p-10 text-center">
                  <div className="font-syne text-4xl font-extrabold bg-gradient-to-br from-[#00E5A0] to-[#0099FF] bg-clip-text text-transparent mb-2">
                    {stat.val}
                  </div>
                  <div className="text-[#7A8A99] text-[10px] tracking-widest uppercase font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,160,0.05)_0%,_transparent_65%)] pointer-events-none" />
        
        <h2 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Ready to Build<br /><span className="bg-gradient-to-br from-[#00E5A0] to-[#0099FF] bg-clip-text text-transparent">Something Great?</span>
        </h2>
        <p className="max-w-lg mx-auto text-[#7A8A99] text-lg font-light mb-12">
          Whether you have an idea, an existing system to improve, or a complex problem to solve &mdash; we&apos;re ready to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#00E5A0] text-[#080C10] hover:bg-[#00ffb2] font-syne font-bold px-10 h-14 rounded-md transition-all hover:-translate-y-1" asChild>
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 bg-transparent text-white hover:bg-white/5 font-syne font-bold px-10 h-14 rounded-md transition-all hover:-translate-y-1" asChild>
            <Link href="/services">View Our Work</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
