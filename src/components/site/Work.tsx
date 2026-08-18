import { useState } from "react";
import projViolence from "@/assets/proj-violence.jpg";
import projMental from "@/assets/proj-mental.jpg";
import projEcom from "@/assets/proj-ecom.jpg";
import projLms from "@/assets/proj-lms.jpg";
import projDocIntel from "@/assets/proj-doc-intelligence.jpg";
import { Frame, Reveal } from "./Primitives";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Code2, Layers, CheckCircle2, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export interface Project {
  slug: string;
  img: string;
  title: string;
  category: "AI & ML" | "Full-Stack Web" | "Upcoming Innovations";
  categoryBadge: string;
  positioning: string;
  desc: string;
  features: string[];
  technologies: string[];
  year: string;
  isUpcoming?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    learning: string;
  };
}

const projects: Project[] = [
  {
    slug: "realtime-violence-detection",
    img: projViolence,
    title: "Realtime Violence Detection System",
    category: "AI & ML",
    categoryBadge: "Computer Vision / Deep Learning",
    positioning: "Automated real-time video surveillance intelligence for high-density safety monitoring.",
    desc: "A deep learning system that flags violent actions in live CCTV video streams, combining spatial motion analysis and temporal object tracking to drastically cut false positives.",
    features: [
      "Real-time Video Processing",
      "Spatial-Temporal Motion Analysis",
      "False-Positive Suppression",
      "Automated Alert Triggers",
      "Frame-by-Frame Analytics"
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "YOLO"],
    year: "2025",
    githubUrl: "https://github.com/mukesh20-ai",
    liveUrl: "",
    caseStudy: {
      problem: "Traditional surveillance depends on manual monitoring, leading to delayed responses during violent incidents in crowded public areas.",
      solution: "Engineered a dual-stream CNN-LSTM pipeline that processes live camera feeds, isolating human motion vectors to classify aggressive behaviors in sub-second latency.",
      architecture: "Video Input → OpenCV Frame Extractor → Spatial CNN Feature Extractor → Temporal LSTM Sequence Model → Real-time Alert Dispatcher.",
      learning: "Minimizing false positives is paramount in real-world computer vision. Combining spatial features with temporal sequence context reduced false alarms by 84%."
    }
  },
  {
    slug: "ai-mental-health-companion",
    img: projMental,
    title: "AI Mental Health & Affective Companion",
    category: "AI & ML",
    categoryBadge: "Multimodal AI / Affective Computing",
    positioning: "Multimodal emotion analysis providing instant mood intelligence and stress intervention.",
    desc: "Reads emotional state from conversational text and facial expression video frames, generating personalized mood analytics, recommendations, and stress-management guidance.",
    features: [
      "Facial Expression Recognition",
      "Text Sentiment Analysis",
      "Multimodal Emotion Fusion",
      "Mood Trend Analytics",
      "Personalized Interventions"
    ],
    technologies: ["Python", "NLP", "OpenCV", "PyTorch", "React"],
    year: "2025",
    githubUrl: "https://github.com/mukesh20-ai",
    liveUrl: "",
    caseStudy: {
      problem: "Mental health tracking often relies solely on self-reported questionnaires, which lack objective, continuous emotional context.",
      solution: "Built a multimodal emotion pipeline that correlates facial micro-expressions with NLP text embeddings to deliver accurate, non-intrusive emotional feedback.",
      architecture: "Webcam & Text Input → Facial Landmark Model + BERT Sentiment Model → Multimodal Fusion Engine → Mood Analytics Dashboard.",
      learning: "Fusing facial cues with text sentiment provided significantly higher accuracy than relying on text or video alone."
    }
  },
  {
    slug: "learning-management-system",
    img: projLms,
    title: "Enterprise Learning Management System",
    category: "Full-Stack Web",
    categoryBadge: "Full-Stack Web / Enterprise Platform",
    positioning: "Production-grade educational platform built during software engineering internship at Atlanwa Technologies.",
    desc: "Built during my internship at Atlanwa Technologies: complete course catalog, secure video lecture streaming, instructor uploads, PayPal checkout integration, and JWT role-based security.",
    features: [
      "Role-Based Auth (JWT)",
      "PayPal Payment Gateway",
      "Video Lecture Streaming",
      "Instructor Asset Portal",
      "Student Progress Tracking"
    ],
    technologies: ["React", "Node.js", "Express", "PayPal API", "JWT", "MongoDB"],
    year: "2024",
    githubUrl: "https://github.com/mukesh20-ai",
    liveUrl: "",
    caseStudy: {
      problem: "Educational institutions and instructors needed a unified platform for course publishing, video distribution, and automated payments.",
      solution: "Architected a scalable full-stack web application featuring role-based dashboards, secure JWT authorization, and instant payment validation.",
      architecture: "React Frontend → RESTful Node/Express Backend → JWT Middleware → MongoDB Database → PayPal Checkout Webhooks.",
      learning: "Role-based access control and payment webhooks require strict idempotent handling to prevent unauthorized access or duplicate transactions."
    }
  },
  {
    slug: "ecommerce-educational-platform",
    img: projEcom,
    title: "E-Commerce Educational Storefront",
    category: "Full-Stack Web",
    categoryBadge: "E-Commerce / Enterprise Backend",
    positioning: "Integrated digital storefront for course browsing, enrollment, and automated payment workflows.",
    desc: "A full-featured digital storefront where students browse, purchase, and access specialized course content, supported by a robust backend architecture for auth and database management.",
    features: [
      "Storefront Catalog & Search",
      "Secure Auth & Encryption",
      "Course Asset Management",
      "Checkout Payment Flow",
      "Relational Database Schema"
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "JavaScript", "Tailwind CSS"],
    year: "2024",
    githubUrl: "https://github.com/mukesh20-ai",
    liveUrl: "",
    caseStudy: {
      problem: "Streamlining student enrollment while maintaining fast catalog searches and resilient database transactions.",
      solution: "Developed a C# .NET Core backend paired with SQL Server relational schemas, delivering snappy API response times for cart and course queries.",
      architecture: "Tailwind UI → C# .NET Controller Layer → Entity Framework ORM → SQL Server Database.",
      learning: "Optimizing database indexing for course queries reduced page load latency by over 60% under concurrent user simulation."
    }
  },
  {
    slug: "ai-document-intelligence-agent",
    img: projDocIntel,
    title: "Autonomous AI Document Intelligence",
    category: "Upcoming Innovations",
    categoryBadge: "Upcoming Future Project / Agentic AI",
    isUpcoming: true,
    positioning: "Autonomous RAG pipeline parsing complex unstructured document formats into actionable structured knowledge.",
    desc: "An upcoming AI agent pipeline designed to parse multi-page PDFs, tables, and handwritten notes into structured vector databases for instant contextual Q&A and automated summarization.",
    features: [
      "RAG Vector Pipeline",
      "Multimodal PDF Extraction",
      "Vector Database Search",
      "Contextual Q&A System",
      "Agentic Workflow Automation"
    ],
    technologies: ["Python", "LangChain", "FastAPI", "Pinecone", "React"],
    year: "2026",
    githubUrl: "https://github.com/mukesh20-ai",
    liveUrl: "",
    caseStudy: {
      problem: "Extracting precise information from long multi-page corporate PDFs and research papers takes hours of manual review.",
      solution: "Designing an agentic retrieval-augmented generation (RAG) system with semantic chunking and hybrid dense-sparse vector search.",
      architecture: "PDF Ingestion → OCR & Chunking → Embeddings Model → Vector Index → LLM Reasoning Agent → Q&A Interface.",
      learning: "High-precision retrieval depends heavily on document parsing quality and semantic chunk boundary alignment."
    }
  }
];

const categories = ["All Projects", "AI & ML", "Full-Stack Web", "Upcoming Innovations"] as const;

export function Work() {
  const [activeTab, setActiveTab] = useState<string>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "All Projects") return true;
    return p.category === activeTab;
  });

  return (
    <section id="work" className="scroll-mt-20">
      <Frame>
        <div className="px-5 py-16">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" />
                Things I've Built
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Things I've Made
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Practical AI models, computer vision applications, and production full-stack web platforms engineered for performance and impact.
              </p>
            </div>
          </Reveal>

          {/* Filter Tabs */}
          <Reveal delay={60}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 py-2 text-xs font-medium transition-all duration-200 ${
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

          {/* Editorial Kalanithi-style Zig-Zag Showcase List */}
          <div className="mt-14 space-y-20">
            {filteredProjects.map((p, i) => {
              const isEven = i % 2 === 0;
              const indexStr = (i + 1).toString().padStart(2, "0");

              return (
                <Reveal key={p.slug} delay={i * 60}>
                  <div className="border-b border-border/60 pb-20 last:border-b-0">
                    <div
                      className={`flex flex-col gap-10 lg:gap-14 items-center justify-between ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Real Cover Image Card (54% width on desktop) */}
                      <div
                        onClick={() => setSelectedProject(p)}
                        className="w-full lg:w-[54%] shrink-0 group/img relative cursor-pointer overflow-hidden rounded-xl border border-border/80 bg-slate-950 shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/50"
                      >
                        <img
                          src={p.img}
                          alt={p.title}
                          width={900}
                          height={550}
                          loading="lazy"
                          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.02]"
                        />

                        {/* Interactive Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-background/95 px-5 py-2.5 text-xs font-bold text-foreground shadow-2xl backdrop-blur-md">
                            Read Case Study
                            <ArrowUpRight className="size-4 text-primary" />
                          </span>
                        </div>
                      </div>

                      {/* Content Details (46% width on desktop) */}
                      <div className="w-full lg:w-[46%] flex flex-col justify-between">
                        <div>
                          {/* Eyebrow Header Tag Line */}
                          <div className="mb-3 flex items-center gap-3 flex-wrap">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                              /{indexStr} {p.categoryBadge} / {p.positioning.toUpperCase()}
                            </span>
                            {p.isUpcoming && (
                              <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                                • Upcoming Project
                              </span>
                            )}
                          </div>

                          {/* Big Bold Uppercase Title */}
                          <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground transition-colors hover:text-primary sm:text-4xl">
                            {p.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                            {p.desc}
                          </p>

                          {/* Tech Pills (Rectangular gray bordered chips) */}
                          <div className="mt-6 flex flex-wrap gap-2">
                            {p.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded border border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions Footer */}
                        <div className="mt-8 flex items-center gap-4">
                          <button
                            onClick={() => setSelectedProject(p)}
                            className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-background shadow-md transition-all hover:bg-foreground/90"
                          >
                            READ CASE STUDY →
                          </button>

                          <div className="flex items-center gap-2">
                            {p.githubUrl && (
                              <a
                                href={p.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                title="View Source on GitHub"
                              >
                                <Github className="size-4" />
                              </a>
                            )}
                            {p.liveUrl && (
                              <a
                                href={p.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                title="Live Project Demo"
                              >
                                <ExternalLink className="size-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Frame>

      {/* Case Study Modal */}
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[92vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-border bg-card p-6 shadow-2xl duration-200 sm:p-8 max-h-[85vh] overflow-y-auto">
            {selectedProject && (
              <div>
                {/* Modal Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {selectedProject.categoryBadge}
                    </span>
                    <Dialog.Title className="mt-3 font-display text-2xl font-bold text-foreground">
                      {selectedProject.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                    <X className="size-5" />
                  </Dialog.Close>
                </div>

                <p className="mt-2 text-sm italic font-medium text-primary/90">
                  "{selectedProject.positioning}"
                </p>

                {/* Problem & Solution Grid */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/90">
                      <Code2 className="size-3.5 text-primary" />
                      Problem & Challenge
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/90">
                      <Layers className="size-3.5 text-primary" />
                      Engineering Solution
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Pipeline */}
                <div className="mt-4 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">
                    System Architecture
                  </h4>
                  <p className="mt-2 text-xs font-mono leading-relaxed text-primary">
                    {selectedProject.caseStudy.architecture}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90">
                    Key Platform Capabilities
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {selectedProject.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        <CheckCircle2 className="size-3.5 text-primary" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Engineering Takeaway */}
                <div className="mt-5 rounded-xl bg-primary/5 p-4 border border-primary/15">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Key Engineering Takeaway
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/90">
                    {selectedProject.caseStudy.learning}
                  </p>
                </div>

                {/* Modal Actions Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="rounded bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      <Github className="size-3.5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
