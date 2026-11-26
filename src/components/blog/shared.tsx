import Link from "next/link";
import type { ReactNode } from "react";
import { BarChart3, BookOpen, Radar, Target, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/blog";

const categoryIcons: Record<string, LucideIcon> = {
  "Demand Generation": Target,
  "Intent Data": Radar,
  Analytics: BarChart3,
};

/** Renders **bold** and [label](/href) inside plain strings. */
export function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <Link
          key={i}
          href={m[2]}
          className="font-medium text-[#b59cff] underline decoration-[#b59cff]/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
        >
          {m[1]}
        </Link>
      );
    }
    return part;
  });
}

/** Generated cover art (no stock images): gradient, grid, rings and the category icon. */
export function CoverArt({ post, large = false, className }: { post: Post; large?: boolean; className?: string }) {
  const Icon = categoryIcons[post.category] ?? BookOpen;
  return (
    <div className={cn("relative isolate overflow-hidden bg-[#0c0a16]", className)} aria-hidden>
      <div className={cn("absolute -inset-1/4 bg-gradient-to-br opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60", post.accent)} />
      <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {[1, 2, 3].map((r) => (
        <span
          key={r}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09] transition-transform duration-700 group-hover:scale-110"
          style={{ width: `${r * (large ? 9 : 6.5)}rem`, height: `${r * (large ? 9 : 6.5)}rem` }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            "flex items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_20px_50px_-12px_rgba(168,85,247,0.7)] ring-1 ring-white/20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]",
            post.accent,
            large ? "h-20 w-20" : "h-14 w-14"
          )}
        >
          <Icon className={large ? "h-9 w-9" : "h-6 w-6"} />
        </span>
      </div>
      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
        {post.category}
      </span>
    </div>
  );
}
