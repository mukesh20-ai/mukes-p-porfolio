import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Briefcase, Trophy, GraduationCap, Mail, Sparkles } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#work", icon: Briefcase },
  { label: "Honors", href: "#achievements", icon: Trophy },
  { label: "Education", href: "#about", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 hidden sm:block"
        >
          <nav className="flex items-center gap-1 rounded-full border border-border/80 bg-card/85 p-1.5 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <item.icon className="size-3.5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
