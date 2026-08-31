export type SolutionFeature = {
  icon: string;
  title: string;
  copy: string;
  problem: string;
};

export type Solution = {
  label: string;
  title: string;
  intro: string;
  features: SolutionFeature[];
  heroImage?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  heroImageOffsetY?: number;
};

export const solutions: Record<string, Solution> = {
  "airport-transfers": {
    label: "SOLUTION / AIRPORT TRANSFERS",
    title: "The moment they land, you're already there.",
    intro:
      "No more anxious calls from the terminal. Flight-aware scheduling means your driver is exactly when and where they're needed.",
    heroImage: "/solutions/airport-transfers.png",
    heroImageWidth: 1167,
    heroImageHeight: 772,
    heroImageOffsetY: -50,
    features: [
      {
        icon: "navigation",
        title: "Flight tracking & auto-adjust",
        copy: "Pickup times adjust automatically as flights land early or late.",
        problem: "Flights land early or late and pickups go wrong.",
      },
      {
        icon: "booking",
        title: "Meet & greet instructions",
        copy: "Terminal, gate and driver contact details travel with every booking.",
        problem: "Passengers can't find their driver in a busy terminal.",
      },
      {
        icon: "calendar",
        title: "Pre-scheduled & return bookings",
        copy: "Take bookings weeks ahead and confirm return legs in one go.",
        problem: "Advance bookings get forgotten or double-booked.",
      },
      {
        icon: "wallet",
        title: "Fixed-fare pricing",
        copy: "Give passengers a clear price before they travel, zone by zone.",
        problem: "Passengers don't know the price until they're charged.",
      },
    ],
  },
  "school-run": {
    label: "SOLUTION / SCHOOL RUN",
    title: "Every parent's peace of mind, every single morning.",
    intro:
      "Safe, tracked routes and instant confirmations mean no parent ever has to wonder where the vehicle is, or whether their child arrived.",
    heroImage: "/solutions/school-run.png",
    heroImageWidth: 1357,
    heroImageHeight: 832,
    features: [
      {
        icon: "route",
        title: "Recurring route scheduling",
        copy: "Set up daily or term-time routes once, then let them run automatically.",
        problem: "Routes are replanned by hand every single term.",
      },
      {
        icon: "location",
        title: "Real-time pickup tracking",
        copy: "See exactly where every vehicle and child is on the route.",
        problem: "Parents call the office asking where the vehicle is.",
      },
      {
        icon: "clarity",
        title: "Driver vetting & compliance",
        copy: "Keep DBS checks, licences and vehicle compliance visible in one place.",
        problem: "Compliance records are scattered across paperwork.",
      },
      {
        icon: "booking",
        title: "Passenger profiles",
        copy: "Store each child’s pickup notes, contact details and journey preferences in one place.",
        problem: "Important child-specific details get passed around verbally.",
      },
    ],
  },
  "corporate-travel": {
    label: "SOLUTION / CORPORATE TRAVEL",
    title: "Make every business trip feel effortless.",
    intro:
      "From the first booking to the final invoice, give your corporate clients a service as professional as they are.",
    heroImage: "/solutions/corporate-travel.png",
    heroImageWidth: 1200,
    heroImageHeight: 647,
    features: [
      {
        icon: "wallet",
        title: "Account billing & invoicing",
        copy: "Consolidate journeys into monthly invoices instead of one-off payments.",
        problem: "Every trip needs its own separate invoice.",
      },
      {
        icon: "booking",
        title: "Self-service booking portal",
        copy: "Let business clients and their staff book directly into your system.",
        problem: "Staff have to call or email just to book a ride.",
      },
      {
        icon: "dispatch",
        title: "Preferred driver handling",
        copy: "Give regular business travellers the familiar, reliable service they expect, with account preferences visible before every journey.",
        problem:
          "Valued clients can feel like just another booking when their needs are not remembered.",
      },
      {
        icon: "calendar",
        title: "Custom rates & agreements",
        copy: "Set negotiated pricing per account without touching your public fares.",
        problem: "Negotiated rates live in a spreadsheet, not the system.",
      },
    ],
  },
  "private-hire-taxi-firms": {
    label: "SOLUTION / PRIVATE HIRE & TAXI FIRMS",
    title: "Built for taxi and private hire firms.",
    intro:
      "Automate every booking, track your drivers in real time, and run a more profitable private hire business.",
    heroImage: "/solutions/private-hire-taxi-firms.png",
    heroImageWidth: 1217,
    heroImageHeight: 653,
    heroImageOffsetY: -60,
    features: [
      {
        icon: "booking",
        title: "Multi-channel bookings",
        copy: "Take jobs by phone, app or website into a single dispatch queue.",
        problem: "Phone, app and website bookings all land in different places.",
      },
      {
        icon: "dispatch",
        title: "Live driver allocation",
        copy: "Assign the nearest available driver and track every job in real time.",
        problem: "Controllers are guessing which driver is actually closest.",
      },
      {
        icon: "wallet",
        title: "Zone & fare management",
        copy: "Set fixed prices, metered fares and zone rules to match your licence area.",
        problem: "Fares are inconsistent from job to job.",
      },
      {
        icon: "clarity",
        title: "Driver & vehicle records",
        copy: "Keep licences, badges and vehicle checks organised in one place.",
        problem: "Licence and vehicle checks live in a filing cabinet.",
      },
    ],
  },
  "sen-transport": {
    label: "SOLUTION / SPECIAL EDUCATIONAL NEEDS TRANSPORT (SEN)",
    title: "Reliable transport for passengers who need extra support.",
    intro:
      "Match bookings to accessible vehicles, assign trained drivers, and give passengers and carers confidence in every journey.",
    heroImage: "/solutions/sen-transport.png",
    heroImageWidth: 1293,
    heroImageHeight: 663,
    features: [
      {
        icon: "booking",
        title: "Journeys built around the passenger",
        copy: "Match every booking with the vehicle, driver and support details that make the journey feel easier.",
        problem:
          "Passengers should not have to fit around a system that does not remember their needs.",
      },
      {
        icon: "clarity",
        title: "Calm, prepared pickups",
        copy: "Give drivers the context they need before they arrive, from access notes to reassurance needs.",
        problem: "A rushed or unprepared pickup can make the whole journey feel stressful.",
      },
      {
        icon: "connected",
        title: "Consistency that builds trust",
        copy: "Keep regular passengers with familiar drivers where possible, so every trip starts with a face they know.",
        problem: "Trust is harder to build when the person at the door keeps changing.",
      },
      {
        icon: "booking",
        title: "Care notes that travel with the booking",
        copy: "Keep mobility needs, carer details and special instructions connected to the journey from start to finish.",
        problem: "The details that matter most are often the easiest to miss.",
      },
    ],
  },
};
