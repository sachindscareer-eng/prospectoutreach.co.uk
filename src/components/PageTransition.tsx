"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

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
      className="min-h-[calc(100vh-4rem)]"
    >
      {children}
    </motion.main>
  );
}
