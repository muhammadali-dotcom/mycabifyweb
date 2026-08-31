export type Feature = { title: string; copy: string; icon: string };
export type Benefit = { label: string; copy: string; icon: string };
export type Product = {
  slug: string;
  label: string;
  title: string;
  intro: string;
  features: Feature[];
  benefits: Benefit[];
  video: string;
};

export const products: Record<string, Product> = {
  "dispatch-system": {
    slug: "dispatch-system",
    label: "FEATURE / DISPATCH SYSTEM",
    title: "Stay ahead of every booking, driver and decision.",
    intro:
      "Create bookings, allocate jobs, follow drivers and manage everyday taxi operations from one clear workspace.",
    video: "1–2 MINUTE DISPATCH WORKFLOW",
    features: [
      {
        icon: "calendar",
        title: "Manage every booking",
        copy: "Create instant, scheduled, return and multi-stop bookings with all journey details in one place.",
      },
      {
        icon: "dispatch",
        title: "Dispatch with confidence",
        copy: "Assign the right driver, track live journeys and manage unassigned bookings from one clear screen.",
      },
      {
        icon: "wallet",
        title: "Control fares and payments",
        copy: "Set fare rules, fixed prices, account pricing and driver commissions with ease.",
      },
      {
        icon: "chart",
        title: "Live Wallboard",
        copy: "See bookings, driver activity and key performance insights in real time. Give your team a clear view of what is happening across the entire operation.",
      },
    ],
    benefits: [
      {
        label: "Less manual work",
        copy: "Spend less time repeating everyday tasks.",
        icon: "sync",
      },
      {
        label: "See everything clearly",
        copy: "Know what's happening across bookings, drivers and journeys.",
        icon: "clarity",
      },
      {
        label: "Make faster decisions",
        copy: "Give controllers the information they need at the right time.",
        icon: "chart",
      },
      {
        label: "Keep everyone connected",
        copy: "Bring your office team, drivers and customers together in one system.",
        icon: "connected",
      },
    ],
  },
  "driver-app": {
    slug: "driver-app",
    label: "FEATURE / DRIVER APP",
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
      {
        label: "Fewer status calls",
        copy: "Drivers and control both see live job status without picking up the phone.",
        icon: "bell",
      },
      {
        label: "Clear job information",
        copy: "Every pickup, drop-off and instruction arrives with the job, not after it.",
        icon: "booking",
      },
      {
        label: "Smoother driver workflow",
        copy: "Drivers move from job to job with less friction and fewer manual steps.",
        icon: "route",
      },
      {
        label: "Better coordination",
        copy: "Office and drivers stay aligned on where every journey stands.",
        icon: "connected",
      },
    ],
  },
  "passenger-app": {
    slug: "passenger-app",
    label: "FEATURE / PASSENGER APP",
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
      {
        label: "More direct bookings",
        copy: "Passengers book straight into your system instead of calling around.",
        icon: "booking",
      },
      {
        label: "Fewer status calls",
        copy: "Live tracking and alerts answer the questions passengers used to call for.",
        icon: "bell",
      },
      {
        label: "Greater passenger confidence",
        copy: "A clear, branded experience makes every journey feel dependable.",
        icon: "valueIcon",
      },
      {
        label: "A stronger local brand",
        copy: "Your own app keeps passengers coming back to you, not a marketplace.",
        icon: "brand",
      },
    ],
  },
  "web-booker": {
    slug: "web-booker",
    label: "FEATURE / WEB BOOKER",
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
      {
        label: "More booking opportunities",
        copy: "Your website captures bookings your team would otherwise miss.",
        icon: "booking",
      },
      {
        label: "Less manual entry",
        copy: "Online bookings arrive ready to dispatch, with nothing to retype.",
        icon: "sync",
      },
      {
        label: "Available around the clock",
        copy: "Customers can book anytime, even when your phones are closed.",
        icon: "clock247",
      },
      {
        label: "Connected directly to Dispatch",
        copy: "Every online booking lands straight in the same workspace as the rest of your operation.",
        icon: "dispatch",
      },
    ],
  },
};

export type ProductCard = {
  no: string;
  name: string;
  href: string;
  copy: string;
  goal: string;
};

export const cards: ProductCard[] = [
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
