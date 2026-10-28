"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/section";
import { DEMOS, type Demo } from "@/content/data";

const CYCLE_MS = 6500;

function Chat({ d }: { d: Demo }) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="demo-msg self-end rounded-[20px_20px_6px_20px] bg-mint px-[18px] py-3 text-base font-semibold text-on-mint">
        {d.msg}
      </div>
      <div
        className="demo-msg rounded-[18px] border border-[#2a302c] bg-[#1a201d] px-4 py-3.5 text-base"
        style={{ animationDelay: "0.5s" }}
      >
        {d.reply}
      </div>
      <div
        className="demo-msg rounded-[18px] border border-[#2a302c] bg-[#1a201d] p-4"
        style={{ animationDelay: "0.9s" }}
      >
        <div className="flex justify-between text-xs font-bold tracking-[0.1em] text-mint">
          <span>{d.bucket}</span>
          <span>{d.total}</span>
        </div>
        <div className="mt-2.5 flex flex-col gap-2">
          {d.lines.map((l, j) => (
            <div
              key={l.name}
              className="demo-line flex justify-between text-base"
              style={{ animationDelay: `${1.1 + j * 0.25}s` }}
            >
              <span>{l.name}</span>
              <strong>{l.amt}</strong>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between border-t border-[#2a302c] pt-3 text-base">
          <strong>TOTAL</strong>
          <strong>{d.total}</strong>
        </div>
      </div>
      <div
        className="demo-msg inline-flex items-center gap-2.5 self-start rounded-full bg-mint px-[22px] py-3 text-base font-bold text-on-mint"
        style={{ animationDelay: "1.6s" }}
      >
        <Icon name="check" className="text-lg" strokeWidth={3} />
        Confirm
      </div>
    </div>
  );
}

export function TryIt() {
  const [pick, setPick] = useState(0);
  // Once the visitor clicks a chip, stop auto-cycling.
  const userPicked = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!userPicked.current) setPick((p) => (p + 1) % DEMOS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const d = DEMOS[pick];

  return (
    <section
      id="try"
      className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <div className="rv flex flex-wrap items-center gap-x-14 gap-y-10 rounded-[40px] border border-mint-line bg-mint-soft p-[clamp(28px,5vw,56px)]">
        <div className="min-w-0 flex-[1_1_340px]">
          <Eyebrow icon="chat">Try it</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(34px,4.6vw,56px)] font-bold leading-none tracking-[-0.028em]">
            Say it like you&apos;d say it.
          </h2>
          <p className="mt-4 text-lg leading-[1.55] text-[#3f5a4e]">
            Pick a message and watch Alex turn it into a card you can confirm.
          </p>
          <div className="mt-[26px] flex flex-col items-start gap-2.5">
            {DEMOS.map((c, i) => {
              const on = i === pick;
              return (
                <button
                  key={c.label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    userPicked.current = true;
                    setPick(i);
                  }}
                  className={`inline-flex min-h-[50px] cursor-pointer items-center gap-2.5 rounded-full border px-[22px] text-base font-semibold transition-transform hover:-translate-y-0.5 ${
                    on
                      ? "border-ink bg-ink text-white"
                      : "border-mint-line bg-surface text-ink"
                  }`}
                >
                  <Icon name={c.icon} className="text-lg" />
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_340px] justify-center">
          <div className="min-h-[370px] w-[min(100%,390px)] rounded-[32px] bg-ink p-5 text-[#f2f4f0] shadow-[0_30px_60px_rgba(16,19,17,0.25)]">
            <div className="flex items-center gap-2.5 border-b border-[#232925] pb-3.5">
              <span className="flex size-[30px] items-center justify-center rounded-[9px] bg-mint font-bold text-on-mint">
                $
              </span>
              <span className="font-display text-lg font-bold text-mint">
                SimpleBudget$
              </span>
              <span className="live-dot ml-auto" />
            </div>

            {/* All demos share one grid cell, so the card is always as tall as the
                tallest one. The hidden copies only reserve height. The keyed
                visible copy replays the entrance animations on every switch. */}
            <div className="grid">
              <div key={pick} className="col-start-1 row-start-1" aria-live="polite">
                <Chat d={d} />
              </div>
              {DEMOS.map((g) => (
                <div
                  key={g.label}
                  className="invisible col-start-1 row-start-1"
                  aria-hidden="true"
                >
                  <Chat d={g} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
