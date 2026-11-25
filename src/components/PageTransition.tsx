"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

// pages whose first section is a dark full-bleed hero that already pads for the fixed navbar,
// so its glow can sit behind the glass menu instead of leaving a flat black band above it
const FULL_BLEED = new Set(["/", "/about", "/careers", "/services", "/contact"]);

export function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <motion.main
      key={pathname}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`min-h-[calc(100vh-5rem)] ${FULL_BLEED.has(pathname) ? "" : "pt-20 sm:pt-24"}`}
    >
      {children}
    </motion.main>
  );
}
