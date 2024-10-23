import * as React from 'react';
import privacyPolicy from '@src/pages/privacy-policy';

export interface IPrivacyPolicyProps { }

type Children = {
  type: string;
  content?: string;
  children?: Array<Omit<Children, 'children'>>;
};

const PRIVACY_POLICY = [
  {
    "title": "Privacy Policy for Mimic Network",
    "children": [
      {
        "type": "p",
        "content": "Effective Date: 20th September, 2024. At Mimic Network, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the information you provide while using the Mimic Network platform, available at mimic-network.com and through our mobile app (collectively, the 'Service')."
      }
    ]
  },
  {
    "title": "1. Information We Collect",
    "children": [
      {
        "type": "ol",
        "children": [
          {
            "type": "li",
            "content": "Personal Information: Name, email address, phone number, profile picture, gender, and birthdate during the account creation process. Information you voluntarily share when creating a profile, posting, or communicating with other users. Payment information when conducting transactions on the platform (via third-party payment providers)."
          },
          {
            "type": "li",
            "content": "Usage Data: Device information (IP address, device type, operating system, browser type, etc.). Usage activity, including interactions with other users, content you view, and features you use. Location information (if you choose to share your location)."
          }
        ]
      }
    ]
  },
  {
    "title": "2. How We Use Your Information",
    "children": [
      {
        "type": "ol",
        "children": [
          {
            "type": "li",
            "content": "To Provide and Improve Services: We use your information to provide, improve, and personalize the Service."
          },
          {
            "type": "li",
            "content": "To Facilitate Communication: We use your information to facilitate user-to-user communication and social networking features."
          },
          {
            "type": "li",
            "content": "To Process Transactions: We use your information to process payments, subscriptions, and transactions."
          },
          {
            "type": "li",
            "content": "To Provide Support: We use your information to respond to user inquiries and provide customer support."
          },
          {
            "type": "li",
            "content": "For Research and Analytics: We use your information to conduct internal research and analytics to improve the platform."
          },
          {
            "type": "li",
            "content": "To Ensure Security: We use your information to ensure security and prevent fraudulent activity."
          },
          {
            "type": "li",
            "content": "To Comply with Legal Obligations: We use your information to comply with legal obligations."
          }
        ]
      }
    ]
  },
  {
    "title": "3. Sharing Your Information",
    "children": [
      {
        "type": "ol",
        "children": [
          {
            "type": "li",
            "content": "With Other Users: When you voluntarily share information (e.g., posts, profile data) on Mimic Network, it will be visible to other users."
          },
          {
            "type": "li",
            "content": "With Third-Party Service Providers: We use trusted third-party providers for hosting, payment processing, and analytics, and they may have access to your data to perform these services."
          },
          {
            "type": "li",
            "content": "For Legal Reasons: If required by law or if necessary to protect our rights, safety, or the rights of others, we may disclose your information to comply with legal processes or law enforcement requests."
          }
        ]
      }
    ]
  },
  {
    "title": "4. Data Security",
    "children": [
      {
        "type": "p",
        "content": "We take the security of your personal information seriously and use appropriate technical and organizational measures to protect your data from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
      }
    ]
  },
  {
    "title": "5. Your Privacy Choices",
    "children": [
      {
        "type": "ol",
        "children": [
          {
            "type": "li",
            "content": "Profile Visibility: You may adjust your account settings to control who can see your profile and activity."
          },
          {
            "type": "li",
            "content": "Location Sharing: You can enable or disable location-sharing features in your device settings or within the app."
          },
          {
            "type": "li",
            "content": "Communication Preferences: You may manage your notification settings within the app to control which types of communications you receive."
          },
          {
            "type": "li",
            "content": "Account Deletion: You can request to delete your account by contacting us at support@mimic-network.com. Upon deletion, we will remove your personal data, except as required for legal or regulatory purposes."
          }
        ]
      }
    ]
  },
  {
    "title": "6. Third-Party Links and Services",
    "children": [
      {
        "type": "p",
        "content": "Mimic Network may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review their privacy policies before interacting with them."
      }
    ]
  },
  {
    "title": "7. Children's Privacy",
    "children": [
      {
        "type": "p",
        "content": "Mimic Network is not intended for use by children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children under these ages. If we learn that we have collected personal data from a child without appropriate consent, we will take steps to delete that information."
      }
    ]
  },
  {
    "title": "8. Changes to This Privacy Policy",
    "children": [
      {
        "type": "p",
        "content": "We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the Service or by other means, so you are aware of the changes. Your continued use of the Service after any changes will constitute your acceptance of the updated Privacy Policy."
      }
    ]
  },
  {
    "title": "9. Contact Us",
    "children": [
      {
        "type": "p",
        "content": "If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact us at: Mimic Network Email: support@mimic-network.com."
      }
    ]
  }
]

export const renderChildren = (children: Array<Children>) => {
  return children.map((child, index) => {
    if (child.type === 'p') {
      return (
        <p key={index + child?.type} className="font-medium my-5">
          {child.content}
        </p>
      );
    }
    if (child.type === 'ol') {
      return (
        <ol key={index}>
          {child.children?.map((li, indexList) => (
            <li
              key={child.type + index + indexList}
              className="list-disc font-medium m-5"
            >
              {li.content}
            </li>
          ))}
        </ol>
      );
    }
  });
};
const PrivacyPolicy: React.FC<IPrivacyPolicyProps> = (props) => {
  return (
    <section className="relative w-full grid place-content-center min-h-[300px] max-w-[100vw] overflow-x-hidden">
      <div className="h-screen rounded-b-full -z-10 bg-primary-900 absolute mx-auto w-full  scale-x-[2] -top-[60vh] inset-x-0 mx-auto" />
      <div className="text-white flex flex-col items-center pt-56">
        <h2 className="lg:text-5xl text-4xl font-bold leading-tight">Privacy policy</h2>
        <p className="leading-loose">Effective from June 2024</p>
      </div>
      <div className="lg:mt-48 md:mt-36 mt-24 lg:w-6/12 md:w-10/12 w-11/12 mx-auto text-secondary-900">
        {PRIVACY_POLICY.map((section, index) => (
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
export default PrivacyPolicy;
