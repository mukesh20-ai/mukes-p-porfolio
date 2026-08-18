import aboutImg from "@/assets/about.jpg";
import srmLogo from "@/assets/srm-logo.svg";
import { Frame, Reveal } from "./Primitives";

const stats = [
  { value: "M.Tech", label: "Data Science at SRM" },
  { value: "7.8", label: "B.Tech GPA at Velammal" },
  { value: "5+", label: "AI & Full-Stack Projects" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <Frame>
        <div className="grid grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-lg">
              <img
                src={aboutImg}
                alt="Mukesh P - M.Tech Data Science student"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-primary/30 bg-background/90 px-3 py-1.5 backdrop-blur-md">
                <img src={srmLogo} alt="SRM Logo" className="size-4 object-contain" />
                <span className="text-xs font-semibold text-foreground">SRM Kattankulathur</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                About Me
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Engineered for Data, AI Models & Practical Code.
              </h3>
              <p className="mt-4 text-justify text-[15px] leading-relaxed text-muted-foreground">
                I'm <strong className="font-semibold text-foreground">Mukesh P</strong> — an M.Tech Data Science student at <strong className="font-semibold text-foreground">SRM Institute of Science and Technology, Kattankulathur</strong>. I hold a B.Tech in Artificial Intelligence and Data Science from Velammal Engineering College, Chennai (7.8 GPA).
              </p>
              <p className="mt-3 text-justify text-[15px] leading-relaxed text-muted-foreground">
                I work across the entire lifecycle of a data problem: collecting unstructured datasets, training deep neural networks, and deploying high-performance production interfaces. Computer vision, NLP, and agentic AI pipelines are where I specialize.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-block rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 shadow-md"
              >
                Let's Connect
              </a>
            </div>
          </Reveal>
        </div>
      </Frame>

      <div className="dot-t dot-b">
        <Frame>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div
                  className={`px-4 py-12 text-center ${i > 0 ? "max-sm:dot-t sm:dot-l" : ""}`}
                >
                  <div className="font-display text-4xl font-bold text-primary">{s.value}</div>
                  <div className="mt-2 text-[14px] font-medium text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Frame>
      </div>
    </section>
  );
}
