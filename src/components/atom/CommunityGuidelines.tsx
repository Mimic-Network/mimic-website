import * as React from "react";
import { renderChildren } from "@src/components/atom/PrivacyPolicy";

export interface ITermsAndConditionsProps {}

const COMMUNITY_GUIDELINES = [
  {
    title: "Community Guidelines",
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
          "Mimic is a platform designed to foster connection, discovery, and shared experiences. To ensure a positive and inclusive environment for all users, we have established the following Community Guidelines.",
      },
    ],
  },
  {
    title: "1. Respect for All Users",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content:
              "Civility and Respect: All interactions on Mimic, including chats, comments, Public Group Calls (PGCs), and other features, must be conducted with respect and courtesy.",
          },
          {
            type: "li",
            content:
              "Prohibition of Harassment and Hate Speech: Harassing, bullying, or discriminatory behavior based on race, ethnicity, gender, sexual orientation, religion, or any other protected characteristic is strictly prohibited.",
          },
          {
            type: "li",
            content:
              "Appropriate Language: Offensive, explicit, or abusive language is not tolerated.",
          },
        ],
      },
    ],
  },
  {
    title: "2. User Privacy and Safety",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content:
              "Protection of Personal Information: Users must not share personally identifiable information, such as addresses, phone numbers, financial details, or other sensitive data.",
          },
          {
            type: "li",
            content:
              "Inappropriate Requests: Soliciting personal information or making inappropriate requests is strictly forbidden.",
          },
        ],
      },
    ],
  },
  {
    title: "3. Content Guidelines",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content:
              "Authenticity and Truthfulness: Users are expected to share genuine and accurate content.",
          },
          {
            type: "li",
            content:
              "Intellectual Property Rights: All content posted on Mimic must be original or lawfully licensed.",
          },
          {
            type: "li",
            content:
              "Spam and Self-Promotion: Spamming, excessive self-promotion, or other disruptive behavior is prohibited.",
          },
        ],
      },
    ],
  },
  {
    title: "4. Prohibited Content",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content:
              "Violent or Threatening Content: Content that promotes violence, harm, or illegal activities.",
          },
          {
            type: "li",
            content:
              "Explicit Content: Pornographic, sexually suggestive, or other explicit content.",
          },
          {
            type: "li",
            content:
              "Misinformation: False or misleading information that may cause harm or confusion.",
          },
        ],
      },
    ],
  },
  {
    title: "5. Guidelines for the 'Meet New Friends' Feature",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content:
              "Respectful Interactions: Users must engage in respectful and appropriate conversations.",
          },
          {
            type: "li",
            content:
              "Appropriate Conduct: Inappropriate language, advances, or behavior is strictly forbidden.",
          },
        ],
      },
    ],
  },
  {
    title: "6. Guidelines for Public Group Calls (PGCs)",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content:
              "Mindful Participation: Users must be mindful of others and avoid disruptive behavior.",
          },
          {
            type: "li",
            content:
              "Topic Adherence: Discussions should remain relevant to the topic of the PGC.",
          },
          {
            type: "li",
            content:
              "Host Guidelines: Users must adhere to the guidelines set by the host of the PGC.",
          },
        ],
      },
    ],
  },
  {
    title: "7. Enforcement of Guidelines",
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            content: "Content Removal: Removal of non-compliant content.",
          },
          {
            type: "li",
            content:
              "Account Suspension: Temporary suspension of user accounts.",
          },
          {
            type: "li",
            content:
              "Account Termination: Permanent termination of user accounts.",
          },
        ],
      },
    ],
  },
  {
    title: "8. Reporting Violations",
    children: [
      {
        type: "p",
        content:
          "Users are encouraged to report any violations of these Community Guidelines. By using Mimic, users agree to abide by these Community Guidelines, as well as the Terms of Service and Privacy Policy.",
      },
    ],
  },
  {
    title: "9. Contact Us",
    children: [
      {
        type: "p",
        content:
          "If you have questions or concerns about our Community Guidelines, please contact us at contactus@mimic-network.com.",
      },
      {
        type: "p",
        content: "Thank you for using Mimic!",
      },
    ],
  },
];

const CommunityGuidelines: React.FC<ITermsAndConditionsProps> = (props) => {
  return (
    <section className="relative w-full grid place-content-center min-h-[300px] max-w-[100vw] overflow-x-hidden">
      <div className="h-screen rounded-b-full -z-10 bg-primary-900 absolute mx-auto w-full  scale-x-[2] -top-[60vh] inset-x-0 mx-auto" />
      <div className="text-white flex flex-col items-center pt-56">
        <h2 className="lg:text-5xl text-4xl font-bold leading-tight">
          Community Guidelines
        </h2>
        <p className="leading-loose">Effective from June 2024</p>
      </div>
      <div className="lg:mt-48 md:mt-36 mt-24 lg:w-6/12 md:w-10/12 w-11/12 mx-auto text-secondary-900">
        {COMMUNITY_GUIDELINES.map((section, index) => (
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
export default CommunityGuidelines;
