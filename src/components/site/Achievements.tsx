import { Frame, Reveal } from "./Primitives";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, ShieldCheck, Flame, GraduationCap, Star, CheckCircle2 } from "lucide-react";

export interface AchievementItem {
  id: string;
  title: string;
  institution: string;
  category: "Tech & Hackathons" | "Certifications" | "Sports Excellence";
  rankBadge: string;
  date: string;
  desc: string;
  icon: any;
}

const achievements: AchievementItem[] = [
  {
    id: "tech-quiz-rmk",
    title: "3rd Place — Technical Quiz Competition",
    institution: "RMK Engineering College, Chennai",
    category: "Tech & Hackathons",
    rankBadge: "🥉 3rd Place Podium",
    date: "2024",
    desc: "Secured 3rd place competing against engineering teams across Tamil Nadu in advanced AI, algorithms, and technical problem solving.",
    icon: Trophy,
  },
  {
    id: "google-cyber",
    title: "Foundations of Cybersecurity",
    institution: "Google Professional Certificate",
    category: "Certifications",
    rankBadge: "Google Verified",
    date: "2024",
    desc: "Completed Google's industry certification covering network security, threat analysis, cryptography fundamentals, and Python automation.",
    icon: ShieldCheck,
  },
  {
    id: "tata-genai",
    title: "GenAI Powered Data Analytics",
    institution: "TATA Virtual Experience Simulation",
    category: "Certifications",
    rankBadge: "TATA Credential",
    date: "2024",
    desc: "Hands-on data analytics job simulation using Generative AI models to clean datasets, extract business metrics, and build executive dashboards.",
    icon: Award,
  },
  {
    id: "zonal-volleyball",
    title: "3rd Place — Zonal Volleyball Championship",
    institution: "Anna University Zone Tournament",
    category: "Sports Excellence",
    rankBadge: "🥉 Zonal Medalist",
    date: "2023",
    desc: "Represented Velammal Engineering College and secured 3rd place in Anna University Zonal inter-collegiate volleyball tournament.",
    icon: Medal,
  },
  {
    id: "svce-volleyball",
    title: "3rd Place — SVCE Trophy Volleyball",
    institution: "Sri Venkateswara College of Engineering",
    category: "Sports Excellence",
    rankBadge: "🥉 3rd Place Trophy",
    date: "2024",
    desc: "Bronze finish in the statewide inter-collegiate SVCE trophy tournament, competing in high-intensity knockout matches.",
    icon: Flame,
  },
  {
    id: "tech-quiz-vec",
    title: "Technical Quiz Showcase Participant",
    institution: "Velammal Engineering College",
    category: "Tech & Hackathons",
    rankBadge: "College Finalist",
    date: "2023",
    desc: "Finalist in college-level technical symposiums testing computer science fundamentals, data structures, and emerging tech.",
    icon: Star,
  },
  {
    id: "intercollege-volleyball",
    title: "3rd Place — Inter-College Athletic Volleyball",
    institution: "State Inter-College Athletics",
    category: "Sports Excellence",
    rankBadge: "🥉 Bronze Medal",
    date: "2023",
    desc: "Podium performance in statewide inter-collegiate sports meet representing team teamwork and competitive athletic strategy.",
    icon: Medal,
  },
  {
    id: "powerbi-tableau",
    title: "Power BI & Tableau Data Analytics",
    institution: "Data Science Specialization Coursework",
    category: "Certifications",
    rankBadge: "Analytics Credential",
    date: "2024",
    desc: "Comprehensive coursework in building interactive BI dashboards, DAX queries, data modeling, and automated KPI reporting.",
    icon: GraduationCap,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20">
      <Frame>
        <div className="px-5 py-16">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Trophy className="size-3.5" />
                Honors & Accomplishments
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Achievements & Recognition
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Statewide technical quiz podiums, Google & TATA industry credentials, and Anna University zonal athletic medals.
              </p>
            </div>
          </Reveal>

          {/* Highlights Counter Banner */}
          <Reveal delay={40}>
            <div className="mt-10 grid grid-cols-1 divide-y divide-border/60 rounded-2xl border border-border/70 bg-card/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0 shadow-sm">
              <div className="p-6 text-center">
                <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">3x</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technical & Sports Podiums
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">Google & TATA</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Industry Credentials
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">Zonal</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Anna Univ Volleyball Medalist
                </div>
              </div>
            </div>
          </Reveal>

          {/* Zig-Zag Timeline Pattern */}
          <div className="relative mt-16">
            {/* Central Vertical Spine Line (Desktop) */}
            <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/80 via-primary/30 to-transparent md:block" />

            <div className="space-y-10 md:space-y-12">
              {achievements.map((item, i) => {
                const isEven = i % 2 === 0;

                return (
                  <Reveal key={item.id} delay={i * 60}>
                    <div className="relative flex flex-col md:flex-row md:items-center">
                      {/* Central Node Dot (Desktop) */}
                      <div className="absolute left-1/2 top-8 z-10 hidden size-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background shadow-md md:flex">
                        <span className="size-1.5 rounded-full bg-primary-foreground" />
                      </div>

                      {/* Card (Alternating Left & Right) */}
                      <motion.div
                        whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
                        className={`w-full rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all hover:shadow-xl md:w-[46%] ${
                          isEven ? "md:mr-auto" : "md:ml-auto"
                        }`}
                      >
                        {/* Badges Header */}
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background p-2 text-primary shadow-sm">
                              <item.icon className="size-4.5" />
                            </div>
                            <span className="rounded-full bg-primary/10 px-3 py-0.5 font-mono text-[11px] font-bold text-primary">
                              {item.rankBadge}
                            </span>
                          </div>
                          <span className="font-mono text-xs font-semibold text-muted-foreground border border-border/60 rounded px-2.5 py-0.5">
                            {item.date}
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <h3 className="mt-4 font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-mono text-xs font-semibold text-primary/80">
                          {item.institution}
                        </p>

                        {/* Description */}
                        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>

                        {/* Footer Category Tag */}
                        <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-3">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                            <CheckCircle2 className="size-3 text-primary" />
                            {item.category}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
