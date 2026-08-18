import { useState, useEffect } from "react";
import { Frame } from "./Primitives";
import { motion, useScroll, useSpring } from "framer-motion";
import { Send } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md dot-b">
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary origin-left z-50"
      />

      <Frame>
        <div className="flex items-center justify-between pl-5">
          <a href="#top" className="flex items-center gap-2.5 py-4 group">
            <span className="grid size-6 place-items-center rounded-md border border-foreground/60 bg-foreground text-[11px] font-bold text-background transition-transform group-hover:scale-105">
              M
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Mukesh P
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:mukeshdeepa206@gmail.com"
            className="inline-flex items-center gap-1.5 bg-primary px-5 py-4 text-[14px] font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            <Send className="size-3.5" />
            Hire Me
          </a>
        </div>
      </Frame>
    </header>
  );
}
