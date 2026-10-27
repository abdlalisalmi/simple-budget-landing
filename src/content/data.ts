import type { IconName } from "@/components/icons";

export type Demo = {
  icon: IconName;
  label: string;
  msg: string;
  reply: string;
  bucket: string;
  total: string;
  lines: { name: string; amt: string }[];
};

/** Money is always shown with exactly two decimals. */
export const DEMOS: Demo[] = [
  {
    icon: "coffee",
    label: "spent $12 on coffee",
    msg: "spent $12 on coffee",
    reply: "Logged ☕",
    bucket: "WANTS",
    total: "$12.00",
    lines: [{ name: "Coffee", amt: "$12.00" }],
  },
  {
    icon: "car",
    label: "uber home 9.50",
    msg: "uber home 9.50",
    reply: "Got it. Transport.",
    bucket: "ESSENTIALS",
    total: "$9.50",
    lines: [{ name: "Uber · Transport", amt: "$9.50" }],
  },
  {
    icon: "cart",
    label: "milk, bread x2, tax",
    msg: "milk 4.99, bread x2 6.98, tax 0.99",
    reply: "Logged 🛒",
    bucket: "ESSENTIALS",
    total: "$12.96",
    lines: [
      { name: "Milk 1 Gal", amt: "$4.99" },
      { name: "Bread x2", amt: "$6.98" },
      { name: "Tax", amt: "$0.99" },
    ],
  },
];

export const TICKER: { icon: IconName; msg: string; bucket: string }[] = [
  { icon: "coffee", msg: "spent $12 on coffee", bucket: "Wants" },
  { icon: "car", msg: "uber home 9.50", bucket: "Essentials" },
  { icon: "cart", msg: "groceries $60", bucket: "Essentials" },
  { icon: "wallet", msg: "moved $50 to Summer vacation", bucket: "Savings" },
  { icon: "receipt", msg: "receipt photo, 3 items", bucket: "Split" },
  { icon: "trend-down", msg: "car loan payment", bucket: "Debt" },
  { icon: "home", msg: "garbage bags $1.25", bucket: "Essentials" },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is SimpleBudget$?",
    a: "It's a budgeting app you talk to. Instead of filling out forms, you just tell Alex what you spent — \"coffee $4, groceries $60\" — and it sorts everything into the right place. Think texting a friend who's great with money.",
  },
  {
    q: "How is it different from other budgeting apps?",
    a: "Most budgeting apps feel like accounting software, so people quit after a week. SimpleBudget$ replaces the spreadsheets and forms with a simple chat — you log by texting, talking, or snapping a receipt, and Alex handles the rest.",
  },
  {
    q: "Do I need to connect my bank account?",
    a: "No. SimpleBudget$ never asks for your bank login. You tell it what you spent, and it keeps track. Nothing to link, nothing to expose.",
  },
  {
    q: "How do I log an expense?",
    a: "Three ways: type it (\"$12 lunch\"), say it out loud, or take a photo of a receipt. Alex sorts it into the right category and shows you a card to confirm. One tap and it's done.",
  },
  {
    q: "Can it really read receipts?",
    a: "Yes. Snap a photo and Alex pulls out each item, the tax, the tip, and any discounts — then sorts them for you. You review before anything is saved.",
  },
  {
    q: "Is my financial information safe?",
    a: "Yes. Your data is encrypted, we never store your passwords, and because there's no bank linking, there's nothing sensitive to leak. You can delete your account and data anytime.",
  },
  {
    q: "What are the monthly reports?",
    a: "At the end of each month, Alex writes you a short, personal report — what went well, what to watch, and a few things to focus on next. It builds on the month before, so it actually helps you improve.",
  },
];

/**
 * Store links. Fill these in once the listings are live; until then the
 * buttons point at the download section so nothing is a dead link.
 */
export const STORE_LINKS = {
  appStore: "#download",
  googlePlay: "#download",
};
