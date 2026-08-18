import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Framer Motion viewport reveal component for smooth section entrances */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.215, 0.61, 0.355, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Centered container frame with structural border lines */
export function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-0">
      <div className={cn("mx-auto w-full max-w-[866px] dot-l dot-r", className)}>{children}</div>
    </div>
  );
}

/** Section label eyebrow band */
export function SectionLabel({ label, id }: { label: string; id?: string }) {
  return (
    <div id={id} className="dot-t dot-b scroll-mt-20">
      <Frame>
        <div className="flex items-center justify-center gap-2 py-4">
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="size-1.5 rounded-full bg-primary"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {label}
          </span>
        </div>
      </Frame>
    </div>
  );
}

export function Spacer({ h = 80 }: { h?: number }) {
  return (
    <Frame>
      <div style={{ height: h }} />
    </Frame>
  );
}
