"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section";
import { FAQ } from "@/content/data";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[900px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <SectionHeading icon="help" eyebrow="FAQ" title="Questions, answered." maxWidth="none" />
      <div className="card rv mt-9 px-7 py-2">
        {FAQ.map((f, i) => {
          const isOpen = i === open;
          return (
            <div
              key={f.q}
              className={i < FAQ.length - 1 ? "border-b border-hair" : ""}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex min-h-[68px] w-full cursor-pointer items-center justify-between gap-5 py-[18px] text-left text-[19px] font-semibold"
                >
                  <span className="font-display transition-colors group-hover:text-mint-text">
                    {f.q}
                  </span>
                  <span
                    className={`flex size-[34px] flex-none items-center justify-center rounded-full text-base transition-colors ${
                      isOpen ? "bg-mint text-on-mint" : "bg-raised text-ink"
                    }`}
                  >
                    <Icon name={isOpen ? "minus" : "plus"} strokeWidth={2.5} />
                  </span>
                </button>
              </h3>
              {isOpen && (
                <p
                  id={`faq-${i}`}
                  className="demo-line mb-[22px] max-w-[40em] text-[17px] leading-[1.6] text-muted"
                >
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
