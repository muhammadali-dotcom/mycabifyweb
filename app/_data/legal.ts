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
    updated: "Effective 1st May 2023",
    intro:
      "These terms and conditions outline the rules and regulations for the use of MyCabify Ltd's website. By accessing this website we assume you accept these terms and conditions. Do not continue to use MyCabify if you do not agree to take all of the terms and conditions stated on this page.",
    sections: [
      {
        heading: "Definitions",
        paragraphs: [
          "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of the United Kingdom. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "We employ the use of cookies. By accessing MyCabify, you agreed to use cookies in agreement with the MyCabify Ltd's Privacy Policy.",
          "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
        ],
      },
      {
        heading: "License",
        paragraphs: [
          "Unless otherwise stated, MyCabify Ltd and/or its licensors own the intellectual property rights for all material on MyCabify. All intellectual property rights are reserved. You may access this from MyCabify for your own personal use subjected to restrictions set in these terms and conditions.",
          "You must not:",
        ],
        list: [
          "Republish material from MyCabify",
          "Sell, rent or sub-license material from MyCabify",
          "Reproduce, duplicate or copy material from MyCabify",
          "Redistribute content from MyCabify",
        ],
      },
      {
        heading: "Comments",
        paragraphs: [
          "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. MyCabify Ltd does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of MyCabify Ltd, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, MyCabify Ltd shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
          "MyCabify Ltd reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.",
          "You warrant and represent that:",
        ],
        list: [
          "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
          "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
          "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;",
          "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
        ],
      },
      {
        heading: "Hyperlinking to our Content",
        paragraphs: [
          "The following organizations may link to our website without prior written approval:",
        ],
        list: [
          "Government agencies;",
          "Search engines;",
          "News organizations;",
          "Online directory distributors may link to our website in the same manner as they hyperlink to the websites of other listed businesses; and",
          "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website.",
        ],
      },
      {
        heading: "IFrames",
        paragraphs: [
          "Without prior approval and written permission, you may not create frames around our webpages that alter in any way the visual presentation or appearance of our website.",
        ],
      },
      {
        heading: "Content Liability",
        paragraphs: [
          "We shall not be hold responsible for any content that appears on your website. You agree to protect and defend us against all claims that is rising on your website. No link(s) should appear on any website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
        ],
      },
      {
        heading: "Reservation of Rights",
        paragraphs: [
          "We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.",
        ],
      },
      {
        heading: "Removal of Links from our Website",
        paragraphs: [
          "If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.",
          "We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website. Nothing in this disclaimer will:",
        ],
        list: [
          "Limit or exclude our or your liability for death or personal injury;",
          "Limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
          "Limit any of our or your liabilities in any way that is not permitted under applicable law; or",
          "Exclude any of our or your liabilities that may not be excluded under applicable law.",
        ],
      },
      {
        heading: "",
        paragraphs: [
          "The limitations and prohibitions of liability set in this section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.",
          "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.",
        ],
      },
    ],
  },
  "privacy-policy": {
    label: "LEGAL",
    title: "Privacy Policy",
    updated: "Last updated: December 27, 2022",
    intro:
      "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.",
    sections: [
      {
        heading: "Interpretation and Definitions",
        paragraphs: [
          "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
          "For the purposes of this Privacy Policy:",
        ],
        list: [
          "Account means a unique account created for You to access our Service or parts of our Service.",
          "Affiliate means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
          "Application refers to MyCabify, the software program provided by the Company.",
          "Company (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to MyCabify.",
          "Country refers to: United Kingdom.",
          "Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
          "Personal Data is any information that relates to an identified or identifiable individual.",
          "Service refers to the Application.",
          "Service Provider means any natural or legal person who processes the data on behalf of the Company.",
          "Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.",
          "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
        ],
      },
      {
        heading: "Personal Data",
        paragraphs: [
          "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
        ],
        list: [
          "Email address",
          "First name and last name",
          "Phone number",
          "Address, State, Province, ZIP/Postal code, City",
          "Usage Data",
        ],
      },
      {
        heading: "Usage Data",
        paragraphs: [
          "Usage Data is collected automatically when using the Service.",
          "Usage Data may include information such as Your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
          "When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.",
          "We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.",
        ],
      },
      {
        heading: "Information Collected while Using the Application",
        paragraphs: [
          "While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:",
        ],
        list: ["Information regarding your location"],
      },
      {
        heading: "",
        paragraphs: [
          "We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.",
          "You can enable or disable access to this information at any time, through Your Device settings.",
        ],
      },
      {
        heading: "Use of Your Personal Data",
        paragraphs: ["The Company may use Personal Data for the following purposes:"],
        list: [
          "To provide and maintain our Service, including to monitor the usage of our Service",
          "To manage Your Account: to manage Your registration as a user of the Service",
          "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased",
          "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication",
          "To provide You with news, special offers and general information about other goods, services and events",
          "To manage Your requests: To attend and manage Your requests to Us",
          "For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets",
          "For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience",
        ],
      },
      {
        heading: "Retention of Your Personal Data",
        paragraphs: [
          "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
        ],
      },
      {
        heading: "Transfer of Your Personal Data",
        paragraphs: [
          "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to, and maintained on, computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
        ],
      },
      {
        heading: "Delete Your Personal Data",
        paragraphs: [
          "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
          "Our Service may give You the ability to delete certain information about You from within the Service.",
          "You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.",
        ],
      },
      {
        heading: "Business Transactions",
        paragraphs: [
          "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.",
        ],
      },
      {
        heading: "Law Enforcement",
        paragraphs: [
          "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).",
        ],
      },
      {
        heading: "Other Legal Requirements",
        paragraphs: [
          "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
        ],
        list: [
          "Comply with a legal obligation",
          "Protect and defend the rights or property of the Company",
          "Prevent or investigate possible wrongdoing in connection with the Service",
          "Protect the personal safety of Users of the Service or the public",
          "Protect against legal liability",
        ],
      },
      {
        heading: "Security of Your Personal Data",
        paragraphs: [
          "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.",
        ],
      },
      {
        heading: "Links to Other Websites",
        paragraphs: [
          "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
        ],
      },
      {
        heading: "Changes to this Privacy Policy",
        paragraphs: [
          "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
          "We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have any questions about this Privacy Policy, You can contact us:",
        ],
        list: ["By email: info@mycabify.com", "By phone: 020 845 588 88", "By post: 66 Kingsley Road, Hounslow, Middlesex TW3 1QA"],
      },
    ],
  },
};
