import { useState } from "react";
import { Frame, Reveal } from "./Primitives";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, Eye, Database, Terminal, Sparkles, Cpu, Layers } from "lucide-react";

export interface Skill {
  name: string;
  category: "AI & ML" | "Computer Vision & NLP" | "Full-Stack & DB" | "Analytics & Tools";
  level: number; // percentage
  experience: string;
  icon: any;
  tags: string[];
}

const skills: Skill[] = [
  {
    name: "Python & PyTorch / TensorFlow",
    category: "AI & ML",
    level: 92,
    experience: "3+ Years",
    icon: Brain,
    tags: ["Deep Learning", "Neural Networks", "CNN-LSTM", "Model Optimization"],
  },
  {
    name: "OpenCV & Computer Vision",
    category: "Computer Vision & NLP",
    level: 90,
    experience: "2+ Years",
    icon: Eye,
    tags: ["Motion Tracking", "YOLO", "Video Analytics", "Object Detection"],
  },
  {
    name: "NLP & Emotion Recognition",
    category: "Computer Vision & NLP",
    level: 88,
    experience: "2+ Years",
    icon: Sparkles,
    tags: ["BERT", "Sentiment Analysis", "Transformers", "Affective Computing"],
  },
  {
    name: "React, TypeScript & Tailwind CSS",
    category: "Full-Stack & DB",
    level: 94,
    experience: "3+ Years",
    icon: Code2,
    tags: ["Component Architecture", "Hooks", "State Management", "Responsive UI"],
  },
  {
    name: "Node.js, Express & REST APIs",
    category: "Full-Stack & DB",
    level: 86,
    experience: "2+ Years",
    icon: Terminal,
    tags: ["JWT Auth", "Role-Based Access", "PayPal API", "Middleware"],
  },
  {
    name: "C# & .NET Core Backend",
    category: "Full-Stack & DB",
    level: 82,
    experience: "2+ Years",
    icon: Layers,
    tags: ["Entity Framework", "Web APIs", "ORM", "Enterprise Architecture"],
  },
  {
    name: "SQL & MongoDB Databases",
    category: "Full-Stack & DB",
    level: 88,
    experience: "2+ Years",
    icon: Database,
    tags: ["Relational Schemas", "Indexing", "Query Optimization", "NoSQL"],
  },
  {
    name: "Pandas, NumPy & Data Wrangling",
    category: "Analytics & Tools",
    level: 92,
    experience: "3+ Years",
    icon: Cpu,
    tags: ["Exploratory Data Analysis", "Feature Engineering", "Data Cleaning"],
  },
  {
    name: "Power BI & Tableau Dashboards",
    category: "Analytics & Tools",
    level: 85,
    experience: "2+ Years",
    icon: Sparkles,
    tags: ["Executive Reporting", "Data Visualization", "Business Analytics"],
  },
];

const categories = [
  "All Skills",
  "AI & ML",
  "Computer Vision & NLP",
  "Full-Stack & DB",
  "Analytics & Tools",
] as const;

export function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<string>("All Skills");

  const filteredSkills = skills.filter((s) => {
    if (activeTab === "All Skills") return true;
    return s.category === activeTab;
  });

  return (
    <section id="skills" className="scroll-mt-20">
      <Frame>
        <div className="px-5 py-16">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Brain className="size-3.5" />
                Technical Competencies
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Interactive Skills & Tech Stack
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Core engineering proficiencies across artificial intelligence, computer vision pipelines, full-stack frameworks, and data analytics.
              </p>
            </div>
          </Reveal>

          {/* Filter Pills */}
          <Reveal delay={60}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Skills Grid */}
          <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((sk) => (
                <motion.div
                  key={sk.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/60 p-6 transition-all shadow-sm hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background p-2 text-primary shadow-sm group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors">
                        <sk.icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[11px] font-semibold text-muted-foreground">
                        {sk.experience}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {sk.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs font-mono font-medium text-muted-foreground">
                        <span>Proficiency</span>
                        <span className="text-primary font-semibold">{sk.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sk.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Library Chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                    {sk.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Frame>
    </section>
  );
}
