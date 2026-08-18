import projViolence from "@/assets/proj-violence.jpg";
import projMental from "@/assets/proj-mental.jpg";
import projLms from "@/assets/proj-lms.jpg";
import { Frame, Reveal } from "./Primitives";

function Tile({ src, alt, rotate }: { src: string; alt: string; rotate: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={900}
      height={900}
      loading="lazy"
      style={{ transform: `rotate(${rotate}deg)` }}
      className="mx-2 inline-block h-[54px] w-[88px] rounded-[6px] object-cover shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:rotate-0 hover:scale-110"
    />
  );
}

export function Manifesto() {
  return (
    <div className="dot-t dot-b">
      <Frame>
        <div className="bracket px-6 py-14">
          <div className="bracket-b py-8">
            <Reveal>
              <div className="text-center font-display text-[clamp(1.4rem,4vw,2.5rem)] leading-[1.6]">
                <span className="text-foreground">Data With Purpose</span>
                <Tile src={projLms} alt="Data dashboard artwork" rotate={-8} />
                <span className="text-muted-foreground">Models That Ship</span>
                <br />
                <Tile src={projViolence} alt="Computer vision artwork" rotate={7} />
                <span className="text-foreground">Detail in Every Layer</span>
                <br />
                <span className="text-muted-foreground">Build Without</span>
                <Tile src={projMental} alt="Emotion recognition artwork" rotate={-6} />
                <span className="text-foreground">Boundaries</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Frame>
    </div>
  );
}
