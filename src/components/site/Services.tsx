import { Box, Code2, Eye, LineChart, Database, Sparkles, ArrowRight } from "lucide-react";
import { Frame, Reveal } from "./Primitives";
import { motion } from "framer-motion";

const services = [
  {
    icon: Box,
    title: "Machine Learning",
    tagline: "Scikit-learn · TensorFlow · PyTorch",
    desc: "I train, validate, and fine-tune predictive models on real-world datasets — focusing on accuracy, generalization, and deployment reliability.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    tagline: "OpenCV · YOLO · Motion Tracking",
    desc: "Real-time object detection, spatial motion tracking, and video analysis pipelines engineered for video streams and surveillance systems.",
  },
  {
    icon: LineChart,
    title: "Data Analytics & Engineering",
    tagline: "Pandas · NumPy · SQL",
    desc: "Transforming raw, unstructured data into clean schemas, statistical summaries, and quantitative insights that answer core business problems.",
  },
  {
    icon: Sparkles,
    title: "Data Visualization & Dashboards",
    tagline: "Power BI · Tableau · Seaborn",
    desc: "Building intuitive executive dashboards and visual reports that make complex metrics understandable at a single glance.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    tagline: "React · TypeScript · Tailwind CSS",
    desc: "Designing fast, responsive web applications with modern component architecture, accessible UI, and smooth layout animations.",
  },
  {
    icon: Database,
    title: "Backend Services & Security",
    tagline: "Node.js · REST APIs · JWT Auth",
    desc: "Robust backend APIs, database access layers, role-based authorization, and payment gateway integration.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <Frame>
        <div className="grid grid-cols-1 pt-10 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <motion.div
                whileHover={{ backgroundColor: "var(--color-secondary)" }}
                transition={{ duration: 0.2 }}
                className={`group relative flex h-full flex-col justify-between px-6 py-12 transition-all ${
                  i >= 2 ? "dot-t" : ""
                } ${i % 2 === 1 ? "sm:dot-l" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background p-2.5 shadow-sm transition-all group-hover:border-primary/40 group-hover:text-primary">
                      <s.icon className="size-5 stroke-[1.6]" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
                  </div>

                  <h3 className="mt-6 font-display text-[22px] font-bold text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-primary/80">{s.tagline}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-foreground/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Explore capability</span>
                  <ArrowRight className="size-3.5" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Frame>
    </section>
  );
}
