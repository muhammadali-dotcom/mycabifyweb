export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDoc = {
  label: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legal: Record<"terms" | "privacy-policy", LegalDoc> = {
  terms: {
    label: "LEGAL",
    title: "Terms and Conditions",
    updated: "Effective 27 August 2026",
    intro:
      "These Terms and Conditions (\"Terms\") govern your access to and use of the MyCabify website, mobile application and ride-hailing service (together, the \"Platform\") operated by MyCabify Ltd (\"MyCabify\", \"we\", \"us\", \"our\"). By creating an account, booking a ride, or otherwise using the Platform, you (\"you\", \"your\", the \"User\") agree to be bound by these Terms. If you do not agree, you must not use the Platform.",
    sections: [
      {
        heading: "About the Service",
        paragraphs: [
          "MyCabify operates a technology platform that connects Users seeking transport (\"Riders\") with independent, licensed drivers (\"Drivers\") who provide private hire vehicle services. MyCabify is a booking intermediary. Except where MyCabify itself holds the relevant private hire operator licence for a journey, the transport service is provided by the Driver or the licensed operator dispatching that Driver, and not directly by MyCabify.",
        ],
      },
      {
        heading: "Eligibility and Accounts",
        paragraphs: [],
        list: [
          "You must be at least 18 years old and legally capable of entering into a binding contract to create an account.",
          "You must provide accurate, current and complete information when registering, and keep it up to date.",
          "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
          "We may suspend or close an account where information provided is false, where fraudulent or abusive activity is suspected, or where these Terms have been breached.",
        ],
      },
      {
        heading: "Bookings, Fares and Cancellations",
        paragraphs: [
          "Booking a ride: Journeys are requested through the app or website. A fare estimate is shown before you confirm a booking; the final fare may vary based on actual route, traffic, waiting time, tolls, surcharges and any applicable dynamic pricing, and will be shown in your trip receipt.",
          "Cancellations: You may cancel a booking at any time before the trip begins. A cancellation fee may apply if you cancel after a Driver has been assigned and a reasonable amount of time has passed, or if the Driver arrives at the pickup point and you are not present within a reasonable waiting period. Applicable cancellation fees are shown in the app before you confirm cancellation.",
          "No-shows and Driver cancellations: If a Driver cancels a confirmed booking without reasonable cause, or fails to complete the journey as booked, we will take reasonable steps to arrange an alternative Driver and may issue a partial or full refund where appropriate.",
        ],
      },
      {
        heading: "Payment",
        paragraphs: [],
        list: [
          "Fares, tolls, applicable fees and any tips are charged to the payment method registered on your account, or paid directly to the Driver where cash payment is offered on the Platform.",
          "Prices displayed include any applicable taxes unless stated otherwise.",
          "Failed or disputed payments may result in temporary suspension of your account until resolved.",
          "Receipts are issued electronically for every completed trip.",
        ],
      },
      {
        heading: "Rider Conduct",
        paragraphs: ["When using the Platform, you agree that you will not:"],
        list: [
          "Behave in a way that is abusive, threatening, discriminatory or unsafe towards a Driver or any other person;",
          "Damage or interfere with a Driver's vehicle;",
          "Carry prohibited, illegal or hazardous items during a trip;",
          "Use the Platform for any unlawful purpose, or to harass, defraud or impersonate another person;",
          "Attempt to circumvent the Platform's booking or payment systems to transact directly with a Driver outside the app.",
        ],
      },
      {
        heading: "",
        paragraphs: [
          "We reserve the right to suspend or terminate access to the Platform, without refund, where a User seriously or repeatedly breaches this section.",
        ],
      },
      {
        heading: "Driver Standards and Vehicle Safety",
        paragraphs: [
          "Drivers operating on the Platform are required to hold a valid private hire driver licence and, where applicable, vehicle licence issued by the relevant local licensing authority, to maintain valid insurance covering the carriage of passengers for hire or reward, and to comply with all conditions of their licence. MyCabify carries out reasonable verification checks on Drivers at onboarding and on an ongoing basis, but does not guarantee the conduct of any individual Driver on every trip.",
        ],
      },
      {
        heading: "Ratings, Reviews and Comments",
        paragraphs: [
          "Riders and Drivers may rate one another after a trip, and parts of the Platform may allow Users to post reviews or comments. Comments do not reflect the views of MyCabify. You are solely responsible for content you post and warrant that it is lawful, accurate, and does not infringe any third party's rights. We reserve the right to remove any content that is inappropriate, offensive, defamatory, or in breach of these Terms.",
        ],
      },
      {
        heading: "Insurance and Incidents",
        paragraphs: [
          "Every trip booked through the Platform is covered by the insurance held by the relevant Driver or licensed operator in accordance with private hire vehicle regulations. If you are involved in an accident, injury, lost property incident, or safety concern during a trip, you should report it through the in-app support function or emergency contact details as soon as reasonably possible, and, where appropriate, to the emergency services and the relevant licensing authority.",
        ],
      },
      {
        heading: "Data Protection and Privacy",
        paragraphs: [
          "We process personal data, including trip and location data, in accordance with our Privacy Policy and applicable data protection law, including the UK General Data Protection Regulation and the Data Protection Act 2018. Location data is collected for the purposes of matching, navigation, trip safety and fraud prevention. Full details of what we collect, why, and your rights over your data are set out in our Privacy Policy, which forms part of these Terms.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "Unless otherwise stated, MyCabify Ltd and/or its licensors own the intellectual property rights in all material on the Platform. You may access this material for your own personal, non-commercial use only. You must not republish, sell, rent, sub-license, reproduce, duplicate, copy or otherwise redistribute material from the Platform without our prior written permission.",
        ],
      },
      {
        heading: "Third-Party Links",
        paragraphs: [
          "The Platform may contain links to third-party websites or services. We are not responsible for the content, accuracy or practices of any linked third-party site, and inclusion of a link does not imply endorsement.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "To the maximum extent permitted by law, MyCabify's liability to you for losses arising from your use of the Platform is limited to direct losses that were reasonably foreseeable at the time you began using the Platform. We do not exclude or limit our liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.",
          "As MyCabify acts as a booking intermediary for trips carried out by independently licensed Drivers, our liability for the acts or omissions of a Driver during a trip is, to the extent permitted by law, limited to our own negligence in the operation of the Platform, without prejudice to any liability the Driver or licensed operator may separately owe you.",
        ],
      },
      {
        heading: "Suspension and Termination",
        paragraphs: [
          "We may suspend or terminate your access to the Platform, with or without notice, if you breach these Terms, if required to do so by a licensing authority or law enforcement, or where necessary to protect the safety of other Users or Drivers. You may close your account at any time through account settings or by contacting support.",
        ],
      },
      {
        heading: "Complaints",
        paragraphs: [
          "If you are unhappy with a trip, a Driver, or any aspect of the Platform, please contact our support team through the app or via the contact details below. We aim to acknowledge complaints promptly and investigate them fairly.",
        ],
      },
      {
        heading: "Changes to These Terms",
        paragraphs: [
          "We may update these Terms from time to time to reflect changes in our services, technology, or legal and regulatory requirements. Where changes are material, we will take reasonable steps to notify Users, for example by in-app notice or email, before the changes take effect. Continued use of the Platform after changes take effect constitutes acceptance of the updated Terms.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms, and any dispute or claim arising out of or in connection with them or their subject matter, are governed by and construed in accordance with the law of England and Wales. The courts of England and Wales will have exclusive jurisdiction, save that if you live in Scotland or Northern Ireland you may also bring proceedings in your local courts.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: ["If you have any questions about these Terms, please contact us at:"],
        list: [
          "Email: support@mycabify.com",
          "Post: MyCabify Ltd, 66 Kingsley Road, Hounslow, Middlesex TW3 1QA, United Kingdom",
        ],
      },
    ],
  },
  "privacy-policy": {
    label: "LEGAL",
    title: "Privacy Policy",
    updated: "Last updated: 27 August 2026",
    intro:
      "This Privacy Policy explains how MyCabify Ltd (\"MyCabify\", \"we\", \"us\", \"our\") collects, uses, shares and protects your personal data when you use the MyCabify website, mobile application and ride-booking service (the \"Service\"), and explains your rights under UK data protection law. By using the Service, you acknowledge that your personal data will be processed as described in this Policy.",
    sections: [
      {
        heading: "Who We Are",
        paragraphs: [
          "MyCabify Ltd is the data controller responsible for your personal data in connection with your use of the Service. We are registered in the United Kingdom. Where a Driver or licensed operator processes your data to carry out a trip (for example, to identify you at pickup), they act as an independent data controller for that purpose, and their own privacy notice will apply to that processing.",
        ],
      },
      {
        heading: "Information You Give Us",
        paragraphs: [],
        list: [
          "Account details: name, email address, phone number, password.",
          "Profile information: profile photo (optional), payment details.",
          "Trip details: pickup and drop-off addresses you enter, ride preferences, notes to Drivers.",
          "Communications: messages you send through in-app chat or support, and content of complaints, ratings or reviews.",
          "ID or verification documents, where required for certain account types (e.g. Driver applicants).",
        ],
      },
      {
        heading: "Information Collected Automatically",
        paragraphs: [],
        list: [
          "Precise and approximate location data from your device, collected during a trip and, if you allow it, in the background before and after a trip to improve pickup accuracy and safety.",
          "Device information: device model, operating system, unique device identifiers, IP address, mobile network information.",
          "Usage data: app and website interactions, pages viewed, features used, crash logs and diagnostics, date and time of use.",
          "Trip data: route taken, distance, duration, fare, time of trip.",
        ],
      },
      {
        heading: "Information From Third Parties",
        paragraphs: [],
        list: [
          "Payment confirmation from our payment processor.",
          "Information from Drivers about a trip (e.g. trip completion, incident reports).",
          "Information from background-check or identity-verification providers, for Driver accounts.",
          "Information from social media platforms if you choose to register or log in via a third-party account.",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: [
          "We use your personal data for the following purposes, and rely on the legal bases shown against each:",
        ],
        list: [
          "To create and manage your account, and to match Riders with Drivers and provide the booking service — necessary to perform our contract with you.",
          "To process payments and issue receipts — necessary to perform our contract with you.",
          "To provide customer support and respond to complaints — necessary to perform our contract with you, or our legitimate interest in resolving issues.",
          "To maintain safety and trust on the Platform, including fraud prevention, incident investigation and driver/rider verification — our legitimate interest in keeping Users and Drivers safe, and to comply with legal obligations.",
          "To send you service communications (booking confirmations, trip updates, safety notices) — necessary to perform our contract with you.",
          "To send you marketing communications about offers or new features — with your consent, which you may withdraw at any time.",
          "To analyse usage, improve the Service, and develop new features — our legitimate interest in improving our product.",
          "To comply with legal, regulatory and licensing obligations, including requests from transport licensing authorities — necessary to comply with a legal obligation.",
        ],
      },
      {
        heading: "Location Data",
        paragraphs: [
          "Location data is central to how the Service works: it allows us to match you with a nearby Driver, calculate routes and fares, and support safety features such as trip tracking. You can control location permissions at any time through your device settings, but disabling location access will limit or prevent core features of the Service, such as being matched with a Driver.",
        ],
      },
      {
        heading: "Who We Share Your Data With",
        paragraphs: [],
        list: [
          "Drivers, to the extent necessary to complete your trip (e.g. your name, pickup location, and, during the trip, your approximate location).",
          "Payment processors, to handle transactions securely.",
          "Service providers who support our operations, such as cloud hosting, customer support tooling, analytics and identity-verification providers, acting on our instructions.",
          "Insurers and licensing authorities, where required for insurance claims or regulatory compliance.",
          "Law enforcement or public authorities, where required by law or to protect the safety of any person.",
          "A buyer or successor entity, in the event of a merger, acquisition or sale of some or all of our business, with notice to you as described in the Changes to This Policy section below.",
        ],
      },
      {
        heading: "",
        paragraphs: ["We do not sell your personal data to third parties."],
      },
      {
        heading: "International Transfers",
        paragraphs: [
          "Some of our service providers may process data outside the United Kingdom. Where this happens, we ensure appropriate safeguards are in place, such as the UK's International Data Transfer Agreement, an adequacy decision, or equivalent contractual protections, so that your data continues to receive a comparable level of protection.",
        ],
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "We retain personal data for as long as necessary to provide the Service, comply with our legal and regulatory obligations (including tax, accounting and transport-licensing record-keeping requirements), resolve disputes, and enforce our agreements. Trip records are typically retained for a period after your account is closed to meet these obligations; when data is no longer needed, we delete or anonymise it.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: ["Under UK data protection law, you have the right to:"],
        list: [
          "Access the personal data we hold about you.",
          "Correct inaccurate or incomplete data.",
          "Request erasure of your data, subject to our legal retention obligations.",
          "Restrict or object to certain processing, including direct marketing.",
          "Request a copy of your data in a portable format.",
          "Withdraw consent at any time, where processing is based on consent.",
          "Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk, or your local supervisory authority.",
        ],
      },
      {
        heading: "",
        paragraphs: [
          "You can exercise most of these rights directly from your account settings, or by contacting us using the details in the Contact Us section below.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We use appropriate technical and organisational measures, including encryption in transit, access controls and regular security review, to protect your personal data. No method of transmission or storage is completely secure, and we cannot guarantee absolute security, but we work to minimise risk and respond promptly to any suspected incident.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other operational reasons. Where changes are material, we will notify you by email and/or a prominent notice on the Service before the changes take effect, and update the \"Last updated\" date above.",
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          "The Service is not directed at children, and we do not knowingly collect personal data from anyone under the age of 16. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.",
        ],
      },
      {
        heading: "Links to Other Websites",
        paragraphs: [
          "The Service may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices of those sites, and we encourage you to review their privacy policies before providing any personal data.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have any questions about this Privacy Policy, or wish to exercise your data protection rights, you can contact us:",
        ],
        list: [
          "By email: privacy@mycabify.com",
          "By phone: 020 845 588 88",
          "By post: 66 Kingsley Road, Hounslow, Middlesex TW3 1QA",
        ],
      },
    ],
  },
};
