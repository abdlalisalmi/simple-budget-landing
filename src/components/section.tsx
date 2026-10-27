import { Icon, type IconName } from "@/components/icons";

/** Small uppercase label with an icon, used above every section heading. */
export function Eyebrow({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-mint-text">
      <Icon name={icon} className="text-base" />
      {children}
    </div>
  );
}

/** Page-level section heading (eyebrow + big title + optional subtitle). */
export function SectionHeading({
  icon,
  eyebrow,
  title,
  sub,
  maxWidth = "12em",
}: {
  icon: IconName;
  eyebrow: string;
  title: string;
  sub?: string;
  maxWidth?: string;
}) {
  return (
    <div className="rv">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2
        className="mt-3.5 font-display text-[clamp(36px,5.4vw,66px)] font-bold leading-none tracking-[-0.035em]"
        style={{ maxWidth }}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-[18px] max-w-[34em] text-[19px] leading-[1.55] text-muted">
          {sub}
        </p>
      )}
    </div>
  );
}

/** Feature-block heading (smaller than the section heading). */
export function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-3 font-display text-[clamp(30px,3.8vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]">
      {children}
    </h3>
  );
}

export function BlockText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-[30em] text-lg leading-[1.55] text-muted">
      {children}
    </p>
  );
}

/** A progress bar that fills in as it scrolls into view. */
export function Bar({
  pct,
  color = "var(--color-mint)",
  thick = false,
}: {
  pct: number;
  color?: string;
  thick?: boolean;
}) {
  return (
    <div className="track" style={{ height: thick ? 12 : undefined }}>
      <div
        className="grow h-full rounded-full"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}
