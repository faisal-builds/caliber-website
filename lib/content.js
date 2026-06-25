// lib/content.js
// All site copy lives here so it's easy to edit in one place.

export const site = {
  brand: "Caliber",
  legal: "Faisal Ahmed LLC",
  email: "hello@caliber.example",
  tagline: "Enterprise AI automation for insurance agencies",
};

export const nav = [
  { label: "Method", href: "#method" },
  { label: "Engine", href: "#engine" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
];

export const stats = [
  { value: "15+ hrs", label: "lost weekly per CSR to repetitive document and data-entry work." },
  { value: "$40k+", label: "in annual salary absorbed by work AI handles in seconds." },
  { value: "Zero", label: "new hires required — it runs inside the systems you already own." },
];

export const steps = [
  {
    idx: "01",
    title: "Diagnose",
    body: "A focused pilot identifies the single costliest manual workflow in your agency and proves the system on your own documents.",
  },
  {
    idx: "02",
    title: "Build",
    body: "We engineer the automation and integrate it into your management system and inbox — Applied Epic, EZLynx, AMS360, HawkSoft.",
  },
  {
    idx: "03",
    title: "Maintain",
    body: "Your team is trained, the system goes live in weeks, and we refine it as carriers and forms change — so it simply keeps working.",
  },
];

export const tiers = [
  {
    name: "Pilot",
    price: "$5,000",
    sub: "",
    desc: "A measured first step. We prove the system on your documents before any larger commitment.",
    features: [
      "Assessment of your costliest workflow",
      "Working demo on your real documents",
      "Fixed quote for the full build",
      "Fee credited toward your build",
    ],
    cta: "Begin a pilot",
    featured: false,
  },
  {
    name: "Full Build",
    price: "$50,000",
    sub: "",
    desc: "One complete workflow, automated end to end and installed into the tools your agency runs on.",
    features: [
      "Everything in Pilot",
      "Full automation built & integrated",
      "Live within weeks, not months",
      "Team training & documentation",
      "30 days of post-launch refinement",
    ],
    cta: "Commission a build",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Bespoke",
    sub: "",
    desc: "For larger agencies automating multiple workflows or several offices under one program.",
    features: [
      "Multiple workflows automated",
      "Priority engineering schedule",
      "A dedicated point of contact",
      "Considered volume pricing",
    ],
    cta: "Enquire privately",
    featured: false,
  },
];

export const security = [
  {
    title: "Your data stays yours",
    body: "Documents are processed to extract data — never stored, never used to train models. Handling terms agreed in writing.",
  },
  {
    title: "Human judgment retained",
    body: "Every extraction carries a confidence score and flags anything uncertain. We remove the typing, never the oversight.",
  },
  {
    title: "Built around your systems",
    body: "Nothing is replaced. The automation feeds the management system you already trust, quietly, in the background.",
  },
];
