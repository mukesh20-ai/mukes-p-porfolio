import { useState } from "react";
import { Frame, Reveal } from "./Primitives";
import { motion } from "framer-motion";
import { Check, Copy, ArrowUp, Send, Sparkles, MessageSquare, ExternalLink, X } from "lucide-react";
import confetti from "canvas-confetti";
import * as Dialog from "@radix-ui/react-dialog";

import gmailLogo from "@/assets/gmail-logo.svg";
import linkedinLogo from "@/assets/linkedin-logo.svg";
import githubLogo from "@/assets/github-logo.svg";
import phoneLogo from "@/assets/phone-logo.svg";

const socials = [
  {
    label: "Gmail / Email",
    href: "mailto:mukeshdeepa206@gmail.com",
    value: "mukeshdeepa206@gmail.com",
    subtext: "Direct email contact",
    logo: gmailLogo,
    accentBorder: "group-hover:border-red-500/40",
  },
  {
    label: "Phone / Call",
    href: "tel:+917604965113",
    value: "+91 76049 65113",
    subtext: "Direct Call / WhatsApp",
    logo: phoneLogo,
    accentBorder: "group-hover:border-emerald-500/40",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mukesh-p-352b17267",
    value: "/in/mukesh-p",
    subtext: "Professional network",
    logo: linkedinLogo,
    accentBorder: "group-hover:border-sky-500/40",
  },
  {
    label: "GitHub",
    href: "https://github.com/mukesh20-ai",
    value: "@mukesh20-ai",
    subtext: "Open source projects",
    logo: githubLogo,
    accentBorder: "group-hover:border-slate-500/40",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("mukeshdeepa206@gmail.com");
    setCopied(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#3b82f6", "#10b981", "#ec4899", "#8b5cf6", "#f59e0b"],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMsgSent(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setIsMsgSent(false);
      setIsModalOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="scroll-mt-20">
      <Frame>
        <div className="px-5 py-16">
          <Reveal>
            {/* Premium Dark Hero Contact Card */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-900 p-8 sm:p-14 text-white shadow-2xl">
              {/* Background ambient lighting */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.35, 0.6, 0.35],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-20 -top-20 size-[380px] rounded-full bg-primary/30 blur-[110px]"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.55, 0.3],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 -bottom-20 size-[360px] rounded-full bg-emerald-500/20 blur-[110px]"
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for Full-Time Roles & AI Collaborations
                </div>

                {/* Main Headline */}
                <h2 className="mt-6 font-display text-[clamp(2.2rem,6.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight">
                  Let's build something{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                    intelligent
                  </span>{" "}
                  together.
                </h2>

                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">
                  M.Tech Data Science student at SRM University Kattankulathur. Reach out for computer vision engineering, deep learning models, or web development opportunities.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-xs font-bold text-primary-foreground shadow-xl transition-all hover:bg-primary/90"
                  >
                    {copied ? (
                      <>
                        <Check className="size-4 text-emerald-300" />
                        Email Copied to Clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="size-4" />
                        mukeshdeepa206@gmail.com
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white shadow-lg backdrop-blur-md hover:bg-white/20"
                  >
                    <MessageSquare className="size-4" />
                    Send Quick Message
                  </motion.button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Frame>

      {/* Interactive Social Cards Grid with Official Logos */}
      <div className="dot-t dot-b">
        <Frame>
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -3, backgroundColor: "var(--color-secondary)" }}
                className={`group relative flex flex-col justify-between bg-card p-6 transition-all ${s.accentBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-white p-2 shadow-sm transition-transform group-hover:scale-105">
                      <img src={s.logo} alt={`${s.label} logo`} className="size-full object-contain" />
                    </div>
                    <ExternalLink className="size-4 text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-1 font-display text-[15px] font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {s.value}
                  </div>
                </div>
                <div className="mt-3 text-[12px] text-muted-foreground/80">
                  {s.subtext}
                </div>
              </motion.a>
            ))}
          </div>
        </Frame>
      </div>

      {/* Footer copyright and scroll top */}
      <Frame>
        <div className="flex flex-col items-center justify-between gap-4 px-5 py-8 text-[14px] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Mukesh P. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary font-semibold">
              Chennai, India · SRM Kattankulathur
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Back to Top
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </Frame>

      {/* Quick Message Dialog Modal */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[92vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-border bg-card p-6 shadow-2xl duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <Dialog.Title className="font-display text-lg font-bold text-foreground">
                  Send Direct Message
                </Dialog.Title>
              </div>
              <Dialog.Close className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground">
                <X className="size-4" />
              </Dialog.Close>
            </div>

            {isMsgSent ? (
              <div className="py-8 text-center space-y-2">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <Check className="size-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground">Message Sent!</h4>
                <p className="text-xs text-muted-foreground">
                  Thank you for reaching out! Mukesh will reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-4 space-y-3.5">
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="mt-1 w-full rounded-lg border border-border/80 bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="mt-1 w-full rounded-lg border border-border/80 bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Project / Message Details</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role opportunity, or collaboration..."
                    className="mt-1 w-full rounded-lg border border-border/80 bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
                >
                  <Send className="size-3.5" />
                  Submit Message
                </button>
              </form>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </footer>
  );
}
