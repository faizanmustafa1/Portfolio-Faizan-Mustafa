"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <FadeUp
      className={cn(
        "mb-20 lg:mb-28",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-6 flex items-center gap-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
        <span className="inline-block rounded-full border border-border bg-card/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
          {label}
        </span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
      <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground sm:text-xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}

export function GlowCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xl transition-all duration-300",
        hover && "hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function SectionDivider() {
  return (
    <div className="section-divider mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
