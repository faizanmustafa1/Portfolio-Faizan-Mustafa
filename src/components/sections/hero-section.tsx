"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion";
import { siteConfig } from "@/lib/data/site-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <div className="order-2 lg:order-1">
          <FadeUp delay={2.4}>
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              Hello <span className="text-lg">👋</span>
            </span>
          </FadeUp>

          <FadeUp delay={2.5}>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Muhammad{" "}
              <span className="bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
                Faizan
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={2.6}>
            <p className="mt-4 font-heading text-xl font-medium text-secondary-foreground sm:text-2xl">
              Full Stack Developer
            </p>
          </FadeUp>

          <FadeUp delay={2.7}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Computer Science graduate from COMSATS University with hands-on
              experience building modern web applications using{" "}
              <span className="text-secondary-foreground">React</span>,{" "}
              <span className="text-secondary-foreground">Next.js</span>,{" "}
              <span className="text-secondary-foreground">Node.js</span>, and{" "}
              <span className="text-secondary-foreground">MongoDB</span>. I
              enjoy creating scalable SaaS products and user-focused digital
              experiences.
            </p>
          </FadeUp>

          <FadeUp delay={2.8}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <RippleButton
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Sparkles size={18} />
                View Projects
              </RippleButton>
              <Button asChild variant="secondary" size="lg">
                <a href={siteConfig.resumeUrl} download>
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={2.9}>
            <motion.div
              className="mt-12 hidden lg:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Scroll to explore
                <ArrowDown size={16} />
              </Link>
            </motion.div>
          </FadeUp>
        </div>

        <FadeUp delay={2.5} className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <motion.div
              className="absolute -inset-8 rounded-full bg-primary/20 blur-[60px]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-12 top-1/4 h-32 w-32 rounded-full bg-primary/15 blur-[50px]"
              animate={{ x: [0, 10, 0], y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-8 bottom-1/4 h-24 w-24 rounded-full bg-glow/10 blur-[40px]"
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-2 border-border bg-secondary shadow-[0_0_60px_rgba(59,130,246,0.25)] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/10 via-transparent to-secondary/80 pointer-events-none" />
                <Image
                  src="/assets/my-photo.png"
                  alt="Muhammad Faizan - Full Stack Developer"
                  fill
                  priority
                  className="scale-[1.15] object-cover object-[50%_38%]"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-primary/20" />
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
