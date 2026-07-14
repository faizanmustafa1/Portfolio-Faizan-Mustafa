"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { FadeUp, SectionDivider, SectionHeader } from "@/components/ui/motion";
import { education } from "@/lib/data/site-data";

export function EducationSection() {
  return (
    <>
      <SectionDivider />
      <section id="education" className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Education"
            title="Academic Background"
            description="The foundation behind my technical journey."
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:block" />

            <div className="space-y-12 lg:space-y-16">
              {education.map((item, index) => (
                <FadeUp key={item.id} delay={index * 0.12}>
                  <article className="relative md:pl-20">
                    <div className="absolute left-8 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_16px_rgba(59,130,246,0.6)] md:block" />

                    <div className="glass-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(59,130,246,0.1)]">
                      <div className="flex flex-wrap items-start justify-between gap-6">
                        <div className="flex items-start gap-5">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-primary/10 text-primary md:hidden">
                            <GraduationCap size={26} />
                          </div>
                          <div>
                            <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                              {item.institution}
                            </p>
                            <h3 className="mt-2 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                              {item.degree}
                            </h3>
                            <div className="mt-3 flex items-center gap-2 text-base text-muted-foreground">
                              <MapPin size={16} className="text-primary/70" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                        <span className="rounded-full border border-border bg-background/60 px-5 py-2 text-sm font-medium text-secondary-foreground">
                          {item.period}
                        </span>
                      </div>

                      <p className="prose-body mt-8">
                        {item.description}
                      </p>

                      {item.coursework.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm text-muted-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
