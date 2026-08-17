export type Item = { title: string; copy: string };
export type Product = {
  label: string;
  title: string;
  intro: string;
  problem: string;
  promise: string;
  items: Item[];
  benefits: string[];
  video: string;
};

export const products: Record<string, Product> = {
  "dispatch-system": {
    label: "SOLUTION / DISPATCH SYSTEM",
    title: "Stay in control—even when the operation gets busy.",
    intro:
      "Create bookings, allocate jobs, follow drivers and manage everyday taxi operations from one clear workspace.",
    problem:
      "When calls, bookings and driver updates arrive together, controllers need clarity—not more screens to manage.",
    promise:
      "See what needs attention, keep work moving and give your team one reliable operational view.",
    video: "1–2 MINUTE DISPATCH WORKFLOW",
    items: [
      {
        title: "Booking management",
        copy: "Create immediate, scheduled, return and multi-stop bookings with the customer and journey information your team needs.",
      },
      {
        title: "Dispatch and allocation",
        copy: "Manage unassigned work, allocate drivers and follow each live journey stage from one operational screen.",
      },
      {
        title: "Drivers and vehicles",
        copy: "Keep driver, vehicle, availability and activity information organised and accessible.",
      },
      {
        title: "Customers and accounts",
        copy: "Manage customer history, corporate journeys, account fares and everyday account work.",
      },
      {
        title: "Pricing and payments",
        copy: "Handle fare rules, fixed prices, payment information, invoices and driver commissions more clearly.",
      },
      {
        title: "Reporting and oversight",
        copy: "Review booking, driver, account and income activity without rebuilding the story from separate tools.",
      },
    ],
    benefits: [
      "Less repeated work",
      "Clearer live visibility",
      "Faster controller decisions",
      "One connected operation",
    ],
  },
  "driver-app": {
    label: "SOLUTION / DRIVER APP",
    title: "Give drivers everything they need for the next journey.",
    intro:
      "From receiving a job to completing the trip, the MyCabify Driver App keeps drivers informed and connected with control.",
    problem:
      "Incomplete details and unclear statuses create calls, delays and frustration for both drivers and controllers.",
    promise:
      "Put the right information in the driver’s hands and keep control updated without constant phone calls.",
    video: "45–60 SECOND DRIVER JOURNEY",
    items: [
      {
        title: "Receive and manage jobs",
        copy: "Give drivers clear job offers, passenger information and journey instructions at the right time.",
      },
      {
        title: "Clear journey stages",
        copy: "Keep control informed as a driver accepts, travels, arrives, picks up and completes.",
      },
      {
        title: "Pickup and destination",
        copy: "Put addresses, notes and important trip details together in one clear journey view.",
      },
      {
        title: "Navigation",
        copy: "Help drivers move from pickup to destination using connected journey information.",
      },
      {
        title: "Availability and status",
        copy: "Let drivers communicate when they are online, busy, available or taking a break.",
      },
      {
        title: "Earnings and activity",
        copy: "Give drivers visibility of completed work, daily activity and relevant earnings information.",
      },
    ],
    benefits: [
      "Fewer status calls",
      "Clear job information",
      "Smoother driver workflow",
      "Better coordination",
    ],
  },
  "passenger-app": {
    label: "SOLUTION / PASSENGER APP",
    title: "Make every booking feel simple and reassuring.",
    intro:
      "Give passengers an easy way to book, manage and follow journeys through your taxi company’s branded app.",
    problem:
      "After booking, passengers want simple answers: Is it confirmed? When will the driver arrive? Which vehicle should I expect?",
    promise:
      "Keep passengers informed from booking confirmation to driver arrival and journey completion.",
    video: "45–60 SECOND PASSENGER JOURNEY",
    items: [
      {
        title: "Simple ride booking",
        copy: "Let passengers enter a pickup, destination and journey details in a few clear steps.",
      },
      {
        title: "Fare and vehicle choices",
        copy: "Present relevant journey options and information before the passenger confirms.",
      },
      {
        title: "Clear confirmation",
        copy: "Reduce uncertainty by showing the passenger that their booking has been received.",
      },
      {
        title: "Live driver visibility",
        copy: "Help passengers understand when their assigned vehicle is approaching.",
      },
      {
        title: "Journey notifications",
        copy: "Keep customers updated without requiring another call to your office.",
      },
      {
        title: "Booking history",
        copy: "Make previous journeys easier to find and repeat while keeping your company’s brand visible.",
      },
    ],
    benefits: [
      "More direct bookings",
      "Fewer status calls",
      "Greater passenger confidence",
      "A stronger local brand",
    ],
  },
  "web-booker": {
    label: "SOLUTION / WEB BOOKER",
    title: "Turn website visitors into confirmed bookings.",
    intro:
      "Give customers a simple online booking experience, with every journey sent directly into MyCabify Dispatch.",
    problem:
      "Not every customer wants to call. If online booking feels difficult—or creates more manual work—valuable demand is lost.",
    promise:
      "Give customers a booking channel that is ready whenever they are, without asking controllers to enter everything again.",
    video: "1–2 MINUTE WEB BOOKING FLOW",
    items: [
      {
        title: "Direct online bookings",
        copy: "Capture customers on your website while they are ready to arrange a journey.",
      },
      {
        title: "Connected fare calculation",
        copy: "Keep online journey pricing aligned with the rules used by your operation.",
      },
      {
        title: "Immediate and scheduled trips",
        copy: "Let customers arrange travel for now or a future date without calling the office.",
      },
      {
        title: "Customer details captured",
        copy: "Send useful booking and passenger information directly into Dispatch.",
      },
      {
        title: "Mobile-friendly booking",
        copy: "Give customers a clear experience across phones, tablets and desktop computers.",
      },
      {
        title: "No re-keying",
        copy: "Bookings arrive ready for controllers to review, allocate and manage.",
      },
    ],
    benefits: [
      "More booking opportunities",
      "Less manual entry",
      "Available around the clock",
      "Connected directly to Dispatch",
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
