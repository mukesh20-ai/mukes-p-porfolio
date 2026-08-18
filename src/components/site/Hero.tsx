import heroPortrait from "@/assets/hero-portrait.png";
import srmLogo from "@/assets/srm-logo.svg";
import { Frame, Reveal } from "./Primitives";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Send } from "lucide-react";

const roles = ["M.Tech Data Science", "Machine Learning & AI", "Computer Vision & Web"];

export function Hero() {
  return (
    <section id="top">
      <Frame>
        <div className="relative overflow-hidden pt-4">
          {/* Animated background glows */}
          <motion.div
            aria-hidden
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.75, 0.5],
              x: [-10, 10, -10],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[12%] top-[6%] size-[340px] rounded-full blur-[100px]"
            style={{ background: "var(--glow-a)" }}
          />
          <motion.div
            aria-hidden
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.6, 0.8, 0.6],
              x: [10, -10, 10],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[10%] top-[12%] size-[320px] rounded-full blur-[100px]"
            style={{ background: "var(--glow-b)" }}
          />

          {/* Status Badge with SRM Logo */}
          <div className="relative z-10 flex justify-center pt-2">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/90 px-4 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-md"
            >
              <img src={srmLogo} alt="SRM Logo" className="size-4 object-contain" />
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              M.Tech Data Science · SRM University, Kattankulathur
            </motion.div>
          </div>

          {/* Cutout Portrait Image */}
          <div className="relative flex justify-center pt-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src={heroPortrait}
              alt="Portrait of Mukesh P"
              width={1000}
              height={1000}
              className="w-[62%] max-w-[430px] select-none object-contain [mask-image:linear-gradient(to_bottom,black_72%,transparent_99%)]"
            />
          </div>

          {/* Heading */}
          <Reveal>
            <h1 className="relative -mt-14 pb-8 text-center text-[clamp(2.4rem,7vw,3.9rem)] leading-[1.05]">
              Hi, I'm Mukesh P
            </h1>
          </Reveal>
        </div>
      </Frame>

      {/* Role Strip */}
      <div className="dot-t dot-b">
        <Frame>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {roles.map((r, i) => (
              <motion.div
                key={r}
                whileHover={{ scale: 1.02, color: "var(--color-primary)" }}
                className={`py-5 text-center text-[15px] font-medium text-foreground/85 transition-colors ${i > 0 ? "max-sm:dot-t sm:dot-l" : ""
                  }`}
              >
                {r}
              </motion.div>
            ))}
          </div>
        </Frame>
      </div>

      {/* Bio Paragraph & Action Buttons */}
      <div className="dot-b">
        <Frame>
          <div className="mx-auto max-w-[640px] px-5 py-8 text-center">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              M.Tech Data Science student at <strong className="font-semibold text-foreground">SRM Institute of Science and Technology, Kattankulathur</strong> (B.Tech AI & DS from Velammal Engineering College). I build intelligent systems that turn raw data into decisions — from real-time computer vision pipelines to production web platforms.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground shadow-md transition-shadow hover:shadow-lg"
              >
                <Sparkles className="size-3.5" />
                Explore Projects
                <ArrowDown className="size-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs font-semibold text-foreground hover:bg-secondary"
              >
                <Send className="size-3.5" />
                Let's Talk
              </motion.a>
            </div>
          </div>
        </Frame>
      </div>
    </section>
  );
}
