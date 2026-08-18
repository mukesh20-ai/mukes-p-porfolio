import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { SkillsMatrix } from "@/components/site/SkillsMatrix";
import { UiUxShowcase } from "@/components/site/UiUxShowcase";
import { Manifesto } from "@/components/site/Manifesto";
import { Work } from "@/components/site/Work";
import { Services } from "@/components/site/Services";
import { Achievements } from "@/components/site/Achievements";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { SectionLabel } from "@/components/site/Primitives";
import { MouseSpotlight } from "@/components/site/MouseSpotlight";
import { FloatingNav } from "@/components/site/FloatingNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mukesh P — M.Tech Data Science & AI Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mukesh P, M.Tech Data Science student at SRM University Kattankulathur building computer vision, NLP and full-stack web projects.",
      },
      { property: "og:title", content: "Mukesh P — M.Tech Data Science & AI Portfolio" },
      {
        property: "og:description",
        content:
          "Computer vision, NLP and full-stack projects by Mukesh P, M.Tech Data Science at SRM University (B.Tech AI & DS, Velammal).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background relative overflow-x-hidden">
      {/* Custom Glowing Cursor Spotlight Trail */}
      <MouseSpotlight />

      <Nav />
      <Hero />
      <SectionLabel label="About Me" />
      <About />
      <SectionLabel label="Skills & Tech Stack" />
      <SkillsMatrix />
      <SectionLabel label="UI/UX & Product Design" />
      <UiUxShowcase />
      <Manifesto />
      <SectionLabel label="Things I've Made" id="work-label" />
      <Work />
      <SectionLabel label="Engineering Capabilities" />
      <Services />
      <SectionLabel label="Achievements" />
      <Achievements />
      <SectionLabel label="Education & Experience" />
      <Education />
      <SectionLabel label="Get In Touch" />
      <Contact />

      {/* Floating Quick Navigation Pill Bar */}
      <FloatingNav />
    </main>
  );
}
