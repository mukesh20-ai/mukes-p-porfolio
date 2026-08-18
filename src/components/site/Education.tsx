import { Frame, Reveal } from "./Primitives";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import srmLogo from "@/assets/srm-logo.svg";
import velammalLogo from "@/assets/velammal-logo.png";
import jaivinsLogo from "@/assets/jaivins-logo.png";
import atlanwaLogo from "@/assets/atlanwa-logo.png";

const rows = [
  {
    school: "SRM Institute of Science and Technology, Kattankulathur",
    detail: "M.Tech in Data Science — Advanced Machine Learning, AI & Big Data Analytics",
    period: "2026 – Present",
    type: "education" as const,
    logo: srmLogo,
    badge: "Current Degree",
  },
  {
    school: "Velammal Engineering College, Chennai",
    detail: "B.Tech, Artificial Intelligence and Data Science — 7.8 GPA",
    period: "Nov 2022 – May 2026",
    type: "education" as const,
    logo: velammalLogo,
    badge: "Completed UG",
  },
  {
    school: "Atlanwa Technologies, Chennai",
    detail: "Web Developer Intern — Built production LMS with payments and role-based access",
    period: "Nov 2024 – Dec 2024",
    type: "experience" as const,
    logo: atlanwaLogo,
    badge: "Internship",
  },
  {
    school: "Jaivins Academy Senior Secondary School, Attur",
    detail: "Higher Secondary Certificate (HSC) — 74%",
    period: "Jun 2020 – May 2022",
    type: "education" as const,
    logo: jaivinsLogo,
  },
  {
    school: "Jaivins Academy Senior Secondary School, Attur",
    detail: "Secondary School Leaving Certificate (SSLC) — 78%",
    period: "Jun 2019 – May 2020",
    type: "education" as const,
    logo: jaivinsLogo,
  },
];

export function Education() {
  return (
    <section id="about" className="scroll-mt-20">
      <Frame>
        <div className="px-5 py-16">
          <Reveal>
            <h2 className="text-center font-display text-[clamp(1.8rem,4.5vw,2.6rem)] font-bold">
              Education & Experience
            </h2>
            <p className="mx-auto mt-3 max-w-[500px] text-center text-[15px] leading-relaxed text-muted-foreground">
              Academic degrees at SRM University, Velammal Engineering & Jaivins Academy along with industry engineering experience at Atlanwa.
            </p>
          </Reveal>
          <div className="mt-12 space-y-3.5">
            {rows.map((r, i) => (
              <Reveal key={r.school + r.period} delay={i * 70}>
                <motion.div
                  whileHover={{ x: 4, backgroundColor: "var(--color-secondary)" }}
                  className="group relative flex flex-col gap-3 rounded-xl border border-border/70 bg-card/50 p-5 transition-all sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    {r.logo ? (
                      <div className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-white p-1.5 shadow-sm transition-transform group-hover:scale-105">
                        <img src={r.logo} alt={`${r.school} logo`} className="size-full object-contain" />
                      </div>
                    ) : (
                      <div className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background p-2.5 text-primary shadow-sm">
                        {r.type === "experience" ? (
                          <Briefcase className="size-5" />
                        ) : (
                          <GraduationCap className="size-5" />
                        )}
                      </div>
                    )}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-[17px] font-bold text-foreground">
                          {r.school}
                        </span>
                        {r.badge && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                            {r.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                        {r.detail}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-xs font-semibold text-primary/80 sm:text-right">
                    {r.period}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}
