import * as React from "react";
import { renderChildren } from "@src/components/atom/PrivacyPolicy";

export interface ITermsAndConditionsProps {}

const TERMS_AND_CONDITIONS = [
  {
    title: "Terms and Conditions",
    children: [
      {
        type: "p",
        content: "Effective Date: 28 October, 2024.",
      },
      {
        type: "p",
        content: "Welcome to Mimic",
        className: "font-bold",
      },
      {
        type: "p",
        content:
          "These Terms and Conditions govern your access to and use of the Mimic app, a platform designed to connect communities through locations, experiences, events, and interactions.",
      },
      {
        type: "p",
        content:
          "By downloading, accessing, or using Mimic, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use Mimic.",
      },
    ],
  },
  {
    title: "1. Acceptance of Terms",
    children: [
      {
        type: "p",
        content:
          "By creating an account, you confirm that you are at least 18 years old. You agree to abide by these Terms, as well as Mimic’s Privacy Policy and Community Guidelines.",
      },
    ],
  },
  {
    title: "2. User Accounts",
    children: [
      {
        type: "ol",
        children: [
          {
            type: "li",
            content:
              "Account Registration: You must register for an account to access certain features. You agree to provide accurate and complete information during registration.",
          },
          {
            type: "li",
            content:
              "Account Security: You are responsible for maintaining the security of your account, including your password. Notify us immediately of any unauthorized access or security breach.",
          },
        ],
      },
    ],
  },
  {
    title: "3. Features",
    children: [
      {
        type: "ol",
        children: [
          {
            type: "li",
            title: "3.1 SPOTS",
            content:
              "The SPOTS feature allows you to discover popular places, events, and experiences within your city or area. Using SPOTS, you can view trending locations and events, interact with spots to see live engagement, and discover top-rated destinations nearby.",
            children: [
              {
                type: "p",
                content:
                  "User Responsibilities: Users are encouraged to verify the legitimacy of listed places before visiting and exercise caution when meeting people in public spaces.",
              },
            ],
          },
          {
            type: "li",
            title: "3.2 MAP",
            content:
              "Mimic’s MAP feature allows you to explore locations, events, and points of interest nearby. The MAP feature is designed to help users navigate to new experiences with friends or other Mimic users.",
            children: [
              {
                type: "p",
                content:
                  "Disclaimer: The MAP feature is for general informational purposes only. Accuracy may vary based on network connectivity and device functionality.",
              },
            ],
          },
          {
            type: "li",
            title: "3.3 MEET NEW FRIENDS",
            content:
              "The MEET NEW FRIENDS feature enables you to connect with others through chat and video calls. You can meet and chat with other users based on shared interests and use video calls to build connections.",
            children: [
              {
                type: "p",
                content:
                  "User Conduct: Users must respect others’ privacy and comply with Mimic’s Community Guidelines. Any form of harassment, spam, or offensive behavior is strictly prohibited.",
              },
            ],
          },
          {
            type: "li",
            title: "3.4 PGCs (Public Group Calls)",
            content:
              "Public Group Calls (PGCs) allow users to host live video sessions, participate in live discussions, and create audiences.",
            children: [
              {
                type: "ul",
                children: [
                  {
                    type: "li",
                    content:
                      "Hosting public calls where users can join and participate.",
                  },
                  {
                    type: "li",
                    content:
                      "Scheduling and conducting paid sessions for professionals, consultants, and coaches.",
                  },
                ],
              },
              {
                type: "p",
                content:
                  "Usage Policy: All content and discussions in PGCs must adhere to Mimic’s Community Guidelines. Mimic reserves the right to monitor and, if necessary, remove any PGCs that violate these terms.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "4. In-App Purchases and Virtual Currency",
    children: [
      {
        type: "p",
        content:
          "Mimic offers in-app purchases, including Mimic Coins, which can be used for interactions within the app (e.g., sending Giftmojis). Prices may vary by region and are subject to change.",
      },
      {
        type: "ul",
        children: [
          {
            type: "p",
            content:
              "Purchases and Refunds: All purchases made on the platform are non-refundable, except where required by law.",
          },
          {
            type: "p",
            content:
              "Currency Value: Mimic Coins may have a set value but fluctuate based on currency exchange rates or promotional discounts.",
          },
          {
            type: "p",
            content:
              "Gifts and Payouts: Users may send or receive Giftmojis that can be converted into payouts. To receive payouts, users must comply with eligibility and verification requirements.",
          },
        ],
      },
    ],
  },
  {
    title: "5. Payment Processing",
    children: [
      {
        type: "p",
        content:
          "Payment processing for services provided through Mimic is facilitated by Payoneer. By using our services, you agree to provide accurate information for payment processing and to comply with all terms and conditions set forth by Payoneer. You acknowledge that Mimic relies on Payoneer for certain compliance and regulatory obligations.",
      },
    ],
  },
  {
    title: "6. Privacy and Data",
    children: [
      {
        type: "p",
        content: "Your privacy is important to us. Please refer to our",
        children: [
          {
            type: "a",
            href: "/privacy-policy",
            content: " Privacy Policy",
          },
          {
            type: "span",
            content:
              " for detailed information on how we collect, use, and protect your personal data.",
          },
        ],
      },
    ],
  },
  {
    title: "7. Community Guidelines",
    children: [
      {
        type: "p",
        content:
          "To maintain a safe and positive environment, all users must adhere to Mimic’s Community Guidelines:",
      },
      {
        type: "ol",
        children: [
          {
            type: "li",
            content: "Be respectful of others in all interactions.",
          },
          {
            type: "li",
            content: "Avoid spamming or soliciting in any group or chat.",
          },
          {
            type: "li",
            content: "Do not share explicit or harmful content.",
          },
          {
            type: "li",
            content:
              "Respect the privacy of others by not sharing private information without consent.",
          },
        ],
      },
      {
        type: "p",
        content:
          "Mimic reserves the right to suspend or terminate accounts that violate these guidelines.",
      },
    ],
  },
  {
    title: "8. Intellectual Property",
    children: [
      {
        type: "p",
        content:
          "All content and features provided by Mimic, including but not limited to software, design, logos, and images, are the intellectual property of Mimic. Users may not copy, reproduce, or distribute any content from the app without permission.",
      },
    ],
  },
  {
    title: "9. Limitation of Liability",
    children: [
      {
        type: "p",
        content:
          "Mimic is provided 'as-is' and 'as available.' While we aim to ensure reliability, we are not responsible for:",
      },
      {
        type: "ol",
        children: [
          {
            type: "li",
            content:
              "any disruptions or interruptions to the service.",
          },
          {
            type: "li",
            content:
              "the accuracy of any map or location-based information",
          },
          {
            type: "li",
            content:
              "the safety or appropriateness of events or venues listed.",
          },
        ]

      },
      {
        type: "p",
        content:
          "Disclaimer: Mimic is not liable for any damages arising from your use or inability to use the app, including but not limited to incidental or consequential damages.",
      },
    ],
  },
  {
    title: "10. User-Generated Content",
    children: [
      {
        type: "p",
        content:
          "Users are solely responsible for the content they share, including comments, photos, and other media. Mimic does not endorse or verify the accuracy of user-generated content and is not liable for any misuse.",
      },
    ],
  },
  {
    title: "11. Amendments",
    children: [
      {
        type: "p",
        content:
          "We reserve the right to update these Terms and Conditions at any time. Any changes will be communicated through the app. Your continued use of Mimic following updates signifies your acceptance of the revised terms.",
      },
    ],
  },
  {
    title: "12. Termination",
    children: [
      {
        type: "p",
        content:
          "Mimic reserves the right to terminate or restrict your access to the app for any violations of these Terms, Community Guidelines, or legal regulations.",
      },
    ],
  },
  {
    title: "13. Contact Us",
    children: [
      {
        type: "p",
        content:
          "If you have any questions or concerns regarding these Terms and Conditions, please contact us at contactus@mimic-network.com. Thank you for using Mimic!",
      },
    ],
  },
];

const TermsAndConditions: React.FC<ITermsAndConditionsProps> = (props) => {
  return (
    <section className="relative w-full grid place-content-center min-h-[300px] max-w-[100vw] overflow-x-hidden">
      <div className="h-screen rounded-b-full -z-10 bg-primary-900 absolute mx-auto w-full  scale-x-[2] -top-[60vh] inset-x-0 mx-auto" />
      <div className="text-white flex flex-col items-center pt-56">
        <h2 className="lg:text-5xl text-4xl font-bold leading-tight">
          Terms and conditions
        </h2>
        <p className="leading-loose">Effective from June 2024</p>
      </div>
      <div className="lg:mt-48 md:mt-36 mt-24 lg:w-6/12 md:w-10/12 w-11/12 mx-auto text-secondary-900">
        {TERMS_AND_CONDITIONS.map((section, index) => (
          <div key={index} className="lg:w-10/12 mx-auto py-6">
            <h3 className="text-xl text-primary-900 font-medium mb-4">
              {section.title}
            </h3>
            {renderChildren(section.children)}
          </div>
        ))}
      </div>
    </section>
  );
};
export default TermsAndConditions;
