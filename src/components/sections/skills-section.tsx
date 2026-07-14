"use client";

import { motion } from "framer-motion";
import { FadeUp, SectionDivider, SectionHeader } from "@/components/ui/motion";
import { getSkillIcon } from "@/lib/skill-icons";
import { skillCategories } from "@/lib/data/site-data";

function SkillIcon({
  name,
  size = 28,
}: {
  name: string;
  size?: number;
}) {
  const { icon: Icon, color } = getSkillIcon(name);

  if (!Icon) return null;

  return (
    <Icon
      size={size}
      color={color}
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:scale-110"
    />
  );
}

export function SkillsSection() {
  return (
    <>
      <SectionDivider />
      <section id="skills" className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Skills"
            title="Technologies I Work With"
            description="The tools and frameworks powering production-ready applications."
          />

          <div className="space-y-16 lg:space-y-24">
            {skillCategories.map((category, catIndex) => (
              <FadeUp key={category.title} delay={catIndex * 0.08}>
                <div>
                  <div className="mb-10 flex items-center gap-4">
                    <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                      {category.title}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                    {category.skills.map((skill, skillIndex) => {
                      const { color } = getSkillIcon(skill.name);

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: catIndex * 0.04 + skillIndex * 0.05,
                            duration: 0.45,
                          }}
                          whileHover={{ y: -6, scale: 1.02 }}
                          className="group relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/40 px-4 py-7 backdrop-blur-xl transition-all duration-300 hover:border-primary/35 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] sm:px-5 sm:py-8"
                        >
                          <div
                            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                              background: `radial-gradient(circle at 50% 30%, ${color}18, transparent 70%)`,
                            }}
                          />

                          <div
                            className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border/80 bg-background/60 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30 sm:h-16 sm:w-16"
                            style={{ boxShadow: `0 0 24px ${color}22` }}
                          >
                            <SkillIcon name={skill.name} />
                          </div>

                          <span className="relative text-center text-sm font-medium text-secondary-foreground transition-colors group-hover:text-foreground sm:text-base">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
