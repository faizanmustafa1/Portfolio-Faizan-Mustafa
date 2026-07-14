"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, SectionDivider, SectionHeader } from "@/components/ui/motion";
import { projects } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <SectionDivider />
      <section id="projects" className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Projects"
            title="Selected Work"
            description="Production-ready applications built with modern tools and thoughtful design."
          />

          {featured && (
            <FadeUp>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative mb-20 overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl lg:mb-28"
              >
                <div className="absolute left-8 top-8 z-10 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-md">
                  <Star size={15} className="fill-primary" />
                  Featured Project
                </div>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[520px]">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/90" />
                  </div>

                  <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
                    <h3 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                      {featured.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {featured.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2.5">
                      {featured.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-8 space-y-3">
                      {featured.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap gap-4">
                      {featured.liveUrl && (
                        <Button asChild size="lg">
                          <a
                            href={featured.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="secondary" size="lg" disabled>
                        <Lock size={18} />
                        Private Repository
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </FadeUp>
          )}

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {others.map((project, index) => (
              <FadeUp key={project.id} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-xl transition-shadow hover:border-primary/25 hover:shadow-[0_12px_48px_rgba(59,130,246,0.12)]"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700 group-hover:scale-105",
                        project.id === "car-dealership" && "object-center"
                      )}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-8 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
                      />
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3 border-t border-border/60 pt-6">
                      {project.liveUrl && (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl ? (
                        <Button asChild size="sm" variant="secondary">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} />
                            GitHub
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" disabled>
                          <Lock size={14} />
                          Private Repo
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
