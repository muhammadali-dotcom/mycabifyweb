export type Item = { title: string; copy: string; details?: string[] };
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
    title: "Stay in control, even when the operation gets busy.",
    intro:
      "Create bookings, allocate jobs, follow drivers and manage everyday taxi operations from one clear workspace.",
    problem:
      "When calls, bookings and driver updates arrive together, controllers need clarity, not more screens to manage.",
    promise:
      "See what needs attention, keep work moving and give your team one reliable operational view.",
    video: "1–2 MINUTE DISPATCH WORKFLOW",
    items: [
      {
        title: "Booking management",
        copy: "Create immediate, scheduled, return and multi-stop bookings with the customer and journey information your team needs.",
        details: [
          "Immediate, scheduled & return trips",
          "Multi-stop journeys",
          "Customer & journey notes",
          "Quick rebooking",
        ],
      },
      {
        title: "Dispatch and allocation",
        copy: "Manage unassigned work, allocate drivers and follow each live journey stage from one operational screen.",
        details: [
          "Unassigned job queue",
          "Manual or automatic allocation",
          "Live journey stage tracking",
          "One operational screen",
        ],
      },
      {
        title: "Drivers and vehicles",
        copy: "Keep driver, vehicle, availability and activity information organised and accessible.",
        details: [
          "Driver profiles & documents",
          "Vehicle records",
          "Live availability status",
          "Activity history",
        ],
      },
      {
        title: "Customers and accounts",
        copy: "Manage customer history, corporate journeys, account fares and everyday account work.",
        details: [
          "Customer booking history",
          "Corporate account journeys",
          "Account fare rules",
          "Everyday account admin",
        ],
      },
      {
        title: "Pricing and payments",
        copy: "Handle fare rules, fixed prices, payment information, invoices and driver commissions more clearly.",
        details: [
          "Configurable fare rules",
          "Fixed & metered pricing",
          "Invoicing",
          "Driver commissions",
        ],
      },
      {
        title: "Reporting and oversight",
        copy: "Review booking, driver, account and income activity without rebuilding the story from separate tools.",
        details: [
          "Booking activity reports",
          "Driver performance",
          "Account & income summaries",
          "One connected view",
        ],
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
        details: [
          "Instant job alerts",
          "Passenger name & contact",
          "Pickup & drop-off details",
          "Accept or decline in-app",
        ],
      },
      {
        title: "Clear journey stages",
        copy: "Keep control informed as a driver accepts, travels, arrives, picks up and completes.",
        details: [
          "Accepted → en route",
          "Arrived notification",
          "Picked up status",
          "Completed automatically",
        ],
      },
      {
        title: "Pickup and destination",
        copy: "Put addresses, notes and important trip details together in one clear journey view.",
        details: [
          "Full pickup address",
          "Destination details",
          "Driver notes",
          "One consolidated view",
        ],
      },
      {
        title: "Navigation",
        copy: "Help drivers move from pickup to destination using connected journey information.",
        details: [
          "Turn-by-turn directions",
          "Live ETA",
          "Connected journey data",
          "Route updates",
        ],
      },
      {
        title: "Availability and status",
        copy: "Let drivers communicate when they are online, busy, available or taking a break.",
        details: [
          "Online / offline toggle",
          "Busy or available status",
          "Break mode",
          "Real-time visibility for control",
        ],
      },
      {
        title: "Earnings and activity",
        copy: "Give drivers visibility of completed work, daily activity and relevant earnings information.",
        details: [
          "Completed job history",
          "Daily activity summary",
          "Earnings breakdown",
          "Trip-by-trip detail",
        ],
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
        details: [
          "Pickup & destination entry",
          "Saved addresses",
          "Journey notes",
          "A few clear steps",
        ],
      },
      {
        title: "Fare and vehicle choices",
        copy: "Present relevant journey options and information before the passenger confirms.",
        details: [
          "Upfront fare estimate",
          "Vehicle type options",
          "Journey details preview",
          "Confirm before booking",
        ],
      },
      {
        title: "Clear confirmation",
        copy: "Reduce uncertainty by showing the passenger that their booking has been received.",
        details: [
          "Instant booking confirmation",
          "Booking reference",
          "Trip summary",
          "Peace of mind",
        ],
      },
      {
        title: "Live driver visibility",
        copy: "Help passengers understand when their assigned vehicle is approaching.",
        details: [
          "Live vehicle tracking",
          "Driver & vehicle details",
          "Real-time ETA",
          "Approach notification",
        ],
      },
      {
        title: "Journey notifications",
        copy: "Keep customers updated without requiring another call to your office.",
        details: [
          "Status push notifications",
          "Arrival alerts",
          "Delay updates",
          "No phone call needed",
        ],
      },
      {
        title: "Booking history",
        copy: "Make previous journeys easier to find and repeat while keeping your company’s brand visible.",
        details: [
          "Past journey list",
          "One-tap rebooking",
          "Receipts on demand",
          "Your branding throughout",
        ],
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
      "Not every customer wants to call. If online booking feels difficult, or creates more manual work, valuable demand is lost.",
    promise:
      "Give customers a booking channel that is ready whenever they are, without asking controllers to enter everything again.",
    video: "1–2 MINUTE WEB BOOKING FLOW",
    items: [
      {
        title: "Direct online bookings",
        copy: "Capture customers on your website while they are ready to arrange a journey.",
        details: [
          "Embedded booking widget",
          "No app download needed",
          "Capture demand in the moment",
          "Confirmation on screen",
        ],
      },
      {
        title: "Connected fare calculation",
        copy: "Keep online journey pricing aligned with the rules used by your operation.",
        details: [
          "Same fare rules as Dispatch",
          "Distance & zone pricing",
          "Fixed price routes",
          "Consistent quotes",
        ],
      },
      {
        title: "Immediate and scheduled trips",
        copy: "Let customers arrange travel for now or a future date without calling the office.",
        details: [
          "Book now or later",
          "Date & time picker",
          "Return journeys",
          "No office call required",
        ],
      },
      {
        title: "Customer details captured",
        copy: "Send useful booking and passenger information directly into Dispatch.",
        details: [
          "Passenger name & contact",
          "Pickup & destination",
          "Special requirements",
          "Sent straight to Dispatch",
        ],
      },
      {
        title: "Mobile-friendly booking",
        copy: "Give customers a clear experience across phones, tablets and desktop computers.",
        details: [
          "Responsive on any device",
          "Fast load times",
          "Simple step-by-step form",
          "Works on phone, tablet & desktop",
        ],
      },
      {
        title: "No re-keying",
        copy: "Bookings arrive ready for controllers to review, allocate and manage.",
        details: [
          "Arrives directly in Dispatch",
          "No manual re-entry",
          "Ready to allocate",
          "Fewer booking errors",
        ],
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
