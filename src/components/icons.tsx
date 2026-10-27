/**
 * Icon system: one hidden SVG sprite rendered once in the root layout, and a
 * tiny <Icon name="…" /> that references it with <use>. Every icon is a plain
 * stroke path so it inherits `currentColor` and scales with font-size.
 */
const SYMBOLS = {
  mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  type: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" /></>,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  undo: <><path d="M9 14L4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 0 12h-3" /></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" /></>,
  pie: <><path d="M12 3v9h9" /><path d="M20.5 15A9 9 0 1 1 9 3.5" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  "trend-down": <><path d="M3 7l6 6 4-4 8 8" /><path d="M15 17h6v-6" /></>,
  "trend-up": <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  sparkles: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.1 9a3 3 0 1 1 4.4 2.6c-.9.5-1.5 1.1-1.5 2.4M12 17.5h.01" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  down: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  coin: <><circle cx="12" cy="12" r="9" /><path d="M14.5 9.2c-.4-.8-1.3-1.2-2.5-1.2-1.5 0-2.5.7-2.5 1.8 0 2.7 5 1.3 5 4 0 1.1-1 1.9-2.5 1.9-1.3 0-2.2-.5-2.6-1.4M12 6.5V8M12 16v1.5" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.8 7L4 20.5 5.5 16A8 8 0 1 1 21 12z" /><path d="M8.5 11h7M8.5 14h4" /></>,
  wallet: <><path d="M3 7a2 2 0 0 1 2-2h13v4" /><path d="M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2z" /><path d="M16 14.5h.01" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  car: <><path d="M5 16V11l2-5h10l2 5v5M3 16h18M7 19v-3M17 19v-3" /><path d="M7.5 12.5h.01M16.5 12.5h.01" /></>,
  coffee: <><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M17 10h2a2 2 0 0 1 0 4h-2M7 3v3M11 3v3M14 3v3" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M3 4h2.5l2.2 11h11l2-8H6.5" /></>,
  home: <><path d="M4 11l8-7 8 7v9H4z" /><path d="M10 20v-6h4v6" /></>,
  apple: (
    <path
      d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.600-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.6-1-2.6-3.6zM14.2 6.2c.6-.8 1.1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.100 1.800-1 2.800 1 .1 2-.5 2.800-1.300z"
      fill="currentColor"
      stroke="none"
    />
  ),
  play: <path d="M6 3.5v17l14-8.5z" fill="currentColor" stroke="none" />,
} as const;

export type IconName = keyof typeof SYMBOLS;

export function IconSprite() {
  return (
    <svg
      width="0"
      height="0"
      className="absolute"
      aria-hidden="true"
      focusable="false"
    >
      {(Object.keys(SYMBOLS) as IconName[]).map((name) => (
        <symbol key={name} id={`i-${name}`} viewBox="0 0 24 24">
          {SYMBOLS[name]}
        </symbol>
      ))}
    </svg>
  );
}

export function Icon({
  name,
  className = "",
  strokeWidth,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={`ic ${className}`}
      style={strokeWidth ? { strokeWidth } : undefined}
      aria-hidden="true"
    >
      <use href={`#i-${name}`} />
    </svg>
  );
}
