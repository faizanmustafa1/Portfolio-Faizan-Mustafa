"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data/site-data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-secondary/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-heading text-lg font-bold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Full Stack Developer · Lahore, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === "email" ? undefined : "_blank"}
                  rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
