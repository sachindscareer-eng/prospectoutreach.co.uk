"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/ProspectOutreach_logo-removebg-preview.png";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  footer?: boolean;
};

export function Logo({ className, width = 180, height = 48, priority = false, footer = false }: LogoProps) {
  const [error, setError] = useState(false);

  const content = error ? (
    <span className="text-lg font-bold tracking-tight text-foreground">ProspectOutreach</span>
  ) : (
    <Image
      src={LOGO_SRC}
      alt="ProspectOutreach"
      width={width}
      height={height}
      className={cn("w-auto object-contain", footer ? "h-9 sm:h-10" : "h-10 sm:h-12", className)}
      priority={priority}
      unoptimized
      onError={() => setError(true)}
    />
  );

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90",
        error && !footer && "text-xl font-bold hover:text-primary"
      )}
      aria-label="ProspectOutreach home"
    >
      {content}
    </Link>
  );
}
