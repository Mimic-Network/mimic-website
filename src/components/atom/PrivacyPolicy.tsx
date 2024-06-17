import * as React from 'react';
import privacyPolicy from '@src/pages/privacy-policy';

export interface IPrivacyPolicyProps {}

type Children = {
  type: string;
  content?: string;
  children?: Array<Omit<Children, 'children'>>;
};

const PRIVACY_POLICY = [
  {
    title: 'Introduction',
    children: [
      {
        type: 'p',
        content:
          'Welcome to Mimic! We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.',
      },
    ],
  },
  {
    title: 'Information We Collect',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content:
              'Personal Information: When you sign up for Mimic, we collect information such as your name, email address, phone number, and profile details.',
          },
          {
            type: 'li',
            content:
              'Usage Data: We collect data on how you interact with the app, including features you use, content you view, and your interactions with other users.',
          },
          {
            type: 'li',
            content:
              'Location Data: With your permission, we collect your location data to enhance your experience and provide location-based services.',
          },
        ],
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content:
              'To Provide and Improve Services: We use your information to deliver and improve our services, including personalized recommendations and relevant content.',
          },
          {
            type: 'li',
            content:
              'Communication: We may use your information to communicate with you about updates, promotions, and other information related to Mimic.',
          },
          {
            type: 'li',
            content:
              'Security: We use your information to enhance the security of our platform and protect against fraud and misuse.',
          },
        ],
      },
    ],
  },
  {
    title: 'Sharing Your Information',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content:
              'With Third Parties: We may share your information with trusted third parties who assist us in operating our app, conducting our business, or serving our users.',
          },
          {
            type: 'li',
            content:
              'Legal Requirements: We may disclose your information if required by law or in response to legal processes.',
          },
        ],
      },
      {
        type: 'p',
        content: 'Your Choices',
      },
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content:
              'Account Settings: You can update your profile information and preferences through your account settings.',
          },
          {
            type: 'li',
            content:
              'Opt-Out: You can opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those communications.',
          },
        ],
      },
      {
        type: 'p',
        content:
          'Security We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.',
      },
      {
        type: 'p',
        content:
          'Changes to This Privacy Policy We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
      },
      {
        type: 'p',
        content:
          'Contact Us If you have any questions or concerns about this Privacy Policy, please contact us at info@mimic.com.',
      },
    ],
  },
];
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
        <h2 className="text-5xl font-bold leading-tight">Privacy policy</h2>
        <p className="leading-loose">Effective from June 2024</p>
      </div>
      <div className="mt-48 w-6/12 mx-auto text-secondary-900">
        {PRIVACY_POLICY.map((section, index) => (
          <div key={index} className="w-10/12 mx-auto py-6">
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
