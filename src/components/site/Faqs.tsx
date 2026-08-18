import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Frame, Reveal } from "./Primitives";

const faqs = [
  {
    q: "What are you looking for right now?",
    a: "Full-time or internship roles in machine learning, data science and AI engineering, starting mid-2026. I'm open to remote and to relocating.",
  },
  {
    q: "Which stack do you work in?",
    a: "Python and SQL day to day, with Scikit-learn, TensorFlow, PyTorch, OpenCV, Pandas, NumPy and Seaborn. On the web side: HTML, CSS, JavaScript, plus C#/.NET and SQL on the backend.",
  },
  {
    q: "Have you shipped anything to real users?",
    a: "Yes — during my internship at Atlanwa Technologies I built a learning management system with course purchases, video lectures, instructor uploads, PayPal payments and JWT role-based access control.",
  },
  {
    q: "Do you work with data visualization tools?",
    a: "Power BI and Tableau for business reporting, Matplotlib and Seaborn for analysis work. I've also completed TATA's GenAI Powered Data Analytics job simulation.",
  },
  {
    q: "What languages do you speak?",
    a: "English at a professional level and Tamil natively.",
  },
  {
    q: "How do I get in touch?",
    a: "Email me at mukeshdeepa206@gmail.com, call 7604965113, or reach out on LinkedIn — I reply within a day.",
  },
];

export function Faqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section>
      <Frame>
        <div className="px-5 py-16">
          <Reveal>
            <h2 className="text-center text-[clamp(1.9rem,5vw,2.9rem)]">
              Everything you need to know
            </h2>
            <p className="mx-auto mt-4 max-w-[430px] text-center text-[15px] leading-relaxed text-muted-foreground">
              The questions I get asked most. If you need more detail, contact me directly.
            </p>
          </Reveal>

          <div className="mt-12">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[16px]">
                        <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                        {f.q}
                      </span>
                      <ArrowRight
                        className={`size-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Frame>
    </section>
  );
}
