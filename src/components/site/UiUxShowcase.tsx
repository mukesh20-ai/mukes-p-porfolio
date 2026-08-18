import { Frame, Reveal } from "./Primitives";
import { motion } from "framer-motion";
import { Layout, Palette, Layers, Smartphone, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

const uiUxFeatures = [
  {
    icon: Palette,
    title: "Design Tokens & Harmonized Palettes",
    desc: "Curated HSL color systems, glassmorphism blur tokens, and fluid typography hierarchies for high-contrast accessibility.",
    tag: "Figma Design System",
  },
  {
    icon: Layout,
    title: "Component-Driven Architecture",
    desc: "Modular UI components engineered with Radix UI primitives, Tailwind utilities, and Framer Motion spring physics.",
    tag: "UI Architecture",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Wireframing",
    desc: "Adaptive responsive layouts tested across 320px mobile viewports, iPad tablets, and 4K desktop screens.",
    tag: "Responsive UX",
  },
  {
    icon: Layers,
    title: "Micro-Interactions & State Feedback",
    desc: "Interactive hover glow states, confetti celebrations, skeleton loaders, and tactile feedback on every click.",
    tag: "Motion Design",
  },
];

export function UiUxShowcase() {
  return (
    <section id="uiux" className="scroll-mt-20">
      <Frame>
        <div className="px-5 py-16">
          {/* Section Header */}
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" />
                UI/UX & Product Design
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                UI/UX Design Systems & Workflow
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Combining artificial intelligence engineering with human-centered product design, intuitive wireframing, and micro-animations.
              </p>
            </div>
          </Reveal>

          {/* 4 Feature Cards with 3D Tilt */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {uiUxFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <TiltCard className="h-full">
                  <motion.div
                    whileHover={{ borderColor: "var(--color-primary)" }}
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all hover:shadow-xl"
                  >
                    <div>
                      {/* Icon */}
                      <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background p-2.5 text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <f.icon className="size-5" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {f.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                        {f.desc}
                      </p>
                    </div>

                    {/* Footer Tag */}
                    <div className="mt-6 border-t border-border/50 pt-4 flex items-center justify-between">
                      <span className="rounded-full bg-secondary/80 px-3 py-0.5 font-mono text-[10px] font-semibold text-secondary-foreground">
                        {f.tag}
                      </span>
                      <CheckCircle2 className="size-3.5 text-primary" />
                    </div>
                  </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}
