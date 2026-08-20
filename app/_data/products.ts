export type Feature = { title: string; copy: string; icon: string };
export type Benefit = { label: string; icon: string };
export type Product = {
  label: string;
  title: string;
  intro: string;
  features: Feature[];
  benefits: Benefit[];
  video: string;
};

export const products: Record<string, Product> = {
  "dispatch-system": {
    label: "SOLUTION / DISPATCH SYSTEM",
    title: "Stay ahead of every booking, driver and decision.",
    intro:
      "Create bookings, allocate jobs, follow drivers and manage everyday taxi operations from one clear workspace.",
    video: "1–2 MINUTE DISPATCH WORKFLOW",
    features: [
      {
        icon: "calendar",
        title: "Booking management",
        copy: "Create immediate, scheduled and multi-stop bookings with the journey details your team needs.",
      },
      {
        icon: "dispatch",
        title: "Dispatch and allocation",
        copy: "Allocate drivers and follow every job from an unassigned queue to a live journey stage.",
      },
      {
        icon: "wallet",
        title: "Pricing and payments",
        copy: "Configure fare rules, fixed prices and driver commissions without leaving the workspace.",
      },
      {
        icon: "chart",
        title: "Reporting and oversight",
        copy: "Review booking, driver and account activity in one connected view, not scattered exports.",
      },
    ],
    benefits: [
      { label: "Less repeated work", icon: "sync" },
      { label: "Clearer live visibility", icon: "clarity" },
      { label: "Faster controller decisions", icon: "chart" },
      { label: "One connected operation", icon: "connected" },
    ],
  },
  "driver-app": {
    label: "SOLUTION / DRIVER APP",
    title: "Give drivers everything they need for the next journey.",
    intro:
      "From receiving a job to completing the trip, the MyCabify Driver App keeps drivers informed and connected with control.",
    video: "45–60 SECOND DRIVER JOURNEY",
    features: [
      {
        icon: "bell",
        title: "Instant job alerts",
        copy: "Drivers see passenger details and pickup instructions the moment a job comes through.",
      },
      {
        icon: "route",
        title: "Live journey stages",
        copy: "Statuses update automatically from accepted to completed, keeping control in the loop.",
      },
      {
        icon: "navigation",
        title: "Turn-by-turn navigation",
        copy: "Live ETAs and directions move drivers from pickup to drop-off without guesswork.",
      },
      {
        icon: "wallet",
        title: "Earnings at a glance",
        copy: "A clear breakdown of completed jobs, daily activity and running earnings.",
      },
    ],
    benefits: [
      { label: "Fewer status calls", icon: "bell" },
      { label: "Clear job information", icon: "booking" },
      { label: "Smoother driver workflow", icon: "route" },
      { label: "Better coordination", icon: "connected" },
    ],
  },
  "passenger-app": {
    label: "SOLUTION / PASSENGER APP",
    title: "Make every booking feel simple and reassuring.",
    intro:
      "Give passengers an easy way to book, manage and follow journeys through your taxi company’s branded app.",
    video: "45–60 SECOND PASSENGER JOURNEY",
    features: [
      {
        icon: "booking",
        title: "Simple ride booking",
        copy: "Enter a pickup, destination and journey details in just a few clear steps.",
      },
      {
        icon: "location",
        title: "Live driver tracking",
        copy: "Passengers watch their driver approach with a real-time ETA, no guessing when to head out.",
      },
      {
        icon: "bell",
        title: "Journey notifications",
        copy: "Push alerts for confirmation, arrival and delays remove the need to call your office.",
      },
      {
        icon: "history",
        title: "One-tap rebooking",
        copy: "Past journeys and receipts stay on hand, making repeat bookings quick and familiar.",
      },
    ],
    benefits: [
      { label: "More direct bookings", icon: "booking" },
      { label: "Fewer status calls", icon: "bell" },
      { label: "Greater passenger confidence", icon: "valueIcon" },
      { label: "A stronger local brand", icon: "brand" },
    ],
  },
  "web-booker": {
    label: "SOLUTION / WEB BOOKER",
    title: "Turn website visitors into confirmed bookings.",
    intro:
      "Give customers a simple online booking experience, with every journey sent directly into MyCabify Dispatch.",
    video: "1–2 MINUTE WEB BOOKING FLOW",
    features: [
      {
        icon: "booking",
        title: "Direct online bookings",
        copy: "An embedded widget captures customers on your site the moment they're ready to travel.",
      },
      {
        icon: "wallet",
        title: "Connected fare calculation",
        copy: "Online quotes use the same fare rules and zone pricing as the rest of your operation.",
      },
      {
        icon: "mobile",
        title: "Works on any device",
        copy: "A responsive, step-by-step form gives a clear experience on phone, tablet and desktop.",
      },
      {
        icon: "sync",
        title: "No re-keying required",
        copy: "Bookings arrive directly in Dispatch, ready to allocate without manual entry.",
      },
    ],
    benefits: [
      { label: "More booking opportunities", icon: "booking" },
      { label: "Less manual entry", icon: "sync" },
      { label: "Available around the clock", icon: "clock247" },
      { label: "Connected directly to Dispatch", icon: "dispatch" },
    ],
  },
};

export const cards = [
  {
    no: "01",
    name: "Dispatch System",
    href: "/dispatch-system",
    copy: "Bookings, allocation and operational control.",
    goal: "Bring control to the busiest part of the day.",
  },
  {
    no: "02",
    name: "Driver App",
    href: "/driver-app",
    copy: "Jobs, statuses and driver activity.",
    goal: "Keep drivers informed and moving.",
  },
  {
    no: "03",
    name: "Passenger App",
    href: "/passenger-app",
    copy: "Branded booking and journey updates.",
    goal: "Give passengers confidence after they book.",
  },
  {
    no: "04",
    name: "Web Booker",
    href: "/web-booker",
    copy: "Direct online bookings connected to Dispatch.",
    goal: "Turn your website into a booking channel.",
  },
];
