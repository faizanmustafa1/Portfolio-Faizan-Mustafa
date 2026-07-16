"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeUp, SectionDivider, SectionHeader } from "@/components/ui/motion";
import { getContactErrorMessage, submitContactForm } from "@/lib/contact-form";
import { siteConfig } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    iconColor: "text-primary",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: siteConfig.whatsappUrl,
    external: true,
    iconColor: "text-[#25D366]",
    isBrand: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
    external: false,
    iconColor: "text-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "faizanmustafa1",
    href: siteConfig.github,
    external: true,
    iconColor: "text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Faizan",
    href: siteConfig.linkedin,
    external: true,
    iconColor: "text-primary",
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await submitContactForm(payload);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(getContactErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionDivider />
      <section id="contact" className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Contact"
            title="Let's Work Together"
            description="Have a project in mind or want to connect? I'd love to hear from you."
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <p className="prose-body mb-10">
                  Whether you&apos;re looking for a developer, have a question,
                  or just want to say hi — my inbox is always open.
                </p>
              </FadeUp>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <FadeUp key={item.label} delay={0.12 + index * 0.06}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="glass-card group flex items-center gap-5 !p-6 transition-all hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)]"
                      >
                        <div
                          className={cn(
                            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-primary/10 shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_28px_rgba(59,130,246,0.2)]",
                            item.label === "WhatsApp" && "bg-[#25D366]/10"
                          )}
                        >
                          {item.isBrand ? (
                            <Icon size={24} className={item.iconColor} />
                          ) : (
                            <Icon
                              size={22}
                              className={item.iconColor}
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={
                                item.external ? "noopener noreferrer" : undefined
                              }
                              className="mt-1 block truncate text-base font-medium text-foreground transition-colors hover:text-primary sm:text-lg"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-base font-medium text-foreground sm:text-lg">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>

            <FadeUp delay={0.2} className="lg:col-span-7">
              <div className="glass-card h-full">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_32px_rgba(59,130,246,0.2)]">
                      <CheckCircle size={36} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                      Message Sent!
                    </h3>
                    <p className="mt-3 max-w-sm text-base text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                    <Button
                      variant="secondary"
                      className="mt-8"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                      Send a Message
                    </h3>
                    <p className="mt-2 text-base text-muted-foreground">
                      Fill out the form below and I&apos;ll respond as soon as possible.
                    </p>

                    {error && (
                      <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        <AlertCircle size={18} className="shrink-0" />
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2.5">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div className="space-y-2.5">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Project inquiry"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          className="min-h-[140px]"
                          required
                          disabled={loading}
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="w-full sm:w-auto"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
