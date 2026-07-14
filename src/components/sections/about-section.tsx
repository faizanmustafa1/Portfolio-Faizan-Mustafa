"use client";

import { Layers, Monitor, Search } from "lucide-react";
import { FadeUp, GlowCard, SectionDivider, SectionHeader } from "@/components/ui/motion";

const stats = [
  "BSCS Graduate — COMSATS",
  "Full Stack Developer",
  "SEO Specialist",
  "Multiple Production Projects",
];

const highlights = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Crafting responsive, performant interfaces with React, Next.js, and Tailwind CSS — where design meets code.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications with Node.js, Express, and MongoDB — from API to deployment.",
  },
  {
    icon: Search,
    title: "SEO Expertise",
    description:
      "Optimizing for Technical SEO, Core Web Vitals, and discoverability so great products get found.",
  },
];

export function AboutSection() {
  return (
    <>
      <SectionDivider />
      <section id="about" className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="About Me"
            title="Crafting Digital Experiences That Matter"
            align="left"
            className="max-w-3xl"
          />

          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32">
            {/* Left — Story */}
            <div className="space-y-10">
              <FadeUp delay={0.1}>
                <p className="prose-body">
                  I&apos;m a{" "}
                  <span className="font-medium text-secondary-foreground">
                    Computer Science graduate
                  </span>{" "}
                  from COMSATS University Islamabad with hands-on experience in
                  full-stack web development using the MERN stack and Next.js.
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    My Journey
                  </h3>
                  <p className="prose-body mt-4">
                    What started as curiosity about how websites work evolved
                    into a passion for building complete digital products — from
                    pixel-perfect frontends to robust backend APIs and
                    databases.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    My Passion
                  </h3>
                  <p className="prose-body mt-4">
                    I&apos;m driven by the challenge of turning complex ideas
                    into elegant, user-focused applications. Every project is an
                    opportunity to learn, refine, and push the boundaries of
                    what&apos;s possible on the web.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    Why SaaS Products
                  </h3>
                  <p className="prose-body mt-4">
                    SaaS platforms like SportsBook excite me because they
                    combine real-world problem solving with scalable
                    architecture — role-based dashboards, payments, and
                    real-time features that serve actual users.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    UI/UX & SEO Focus
                  </h3>
                  <p className="prose-body mt-4">
                    Beautiful interfaces mean nothing if they&apos;re slow or
                    invisible. I focus on UI/UX craft alongside Technical SEO
                    and Core Web Vitals so every application is fast,
                    discoverable, and delightful to use.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.35}>
                <div className="flex flex-wrap gap-3 pt-2">
                  {stats.map((stat) => (
                    <span key={stat} className="stat-pill">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                      {stat}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — Highlight cards */}
            <div className="space-y-6 lg:space-y-8">
              {highlights.map((item, index) => (
                <FadeUp key={item.title} delay={0.15 + index * 0.1}>
                  <GlowCard className="!p-8 sm:!p-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-primary/10 text-primary shadow-[0_0_24px_rgba(59,130,246,0.15)]">
                      <item.icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {item.description}
                    </p>
                  </GlowCard>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
