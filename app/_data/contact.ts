export type Purpose = "demo" | "quote" | "migration" | "support";

export const purposeOptions: { id: Purpose; title: string; copy: string }[] = [
  { id: "demo", title: "Book a demo", copy: "See the parts of MyCabify most relevant to your operation." },
  { id: "quote", title: "Request a quote", copy: "Tell us your fleet size and the solutions you need." },
  { id: "migration", title: "Discuss moving systems", copy: "Share your current setup and migration requirements." },
  { id: "support", title: "Existing customer support", copy: "Use your normal MyCabify support channel for the fastest response." },
];

export const fleetSizes = ["1–20 vehicles", "21–100 vehicles", "100+ vehicles"];
export const products = ["Dispatch System", "Driver App", "Passenger App", "Web Booker"];
