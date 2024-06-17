import * as React from 'react';
import { renderChildren } from '@src/components/atom/PrivacyPolicy';

export interface ITermsAndConditionsProps {
}

const TERMS_AND_CONDITIONS = [
  {
    title: 'Introduction',
    children: [
      {
        type: 'p',
        content:
          'Welcome to Mimic! By using our app, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.',
      },
    ],
  },
  {
    title: 'Use of the App',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content: 'Eligibility: You must be at least 13 years old to use Mimic. By using the app, you represent and warrant that you meet this age requirement',
          },
          {
            type: 'li',
            content: 'Account Security: You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.',
          },
        ],
      },
    ],
  },
  {
    title: 'User Conduct',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content: 'Prohibited Activities: You agree not to use Mimic for any unlawful purpose or in any way that could harm, disable, or impair the app.',
          },
          {
            type: 'li',
            content: 'Content: You are responsible for the content you post on Mimic. You agree not to post any content that is illegal, harmful, or violates the rights of others.',
          },
        ],
      },
    ],
  },
  {
    title: 'Intellectual Property',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content: 'Ownership: All content and materials on Mimic, including text, graphics, logos, and software, are the property of Mimic or its licensors and are protected by intellectual property laws.',
          },
          {
            type: 'li',
            content: 'License: Mimic grants you a limited, non-exclusive, non-transferable, and revocable license to use the app for personal, non-commercial use',
          },
        ],
      },
    ],
  },
  {
    title: 'Limitation of Liability',
    children: [
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            content: 'No Warranties: Mimic is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the app\'s content.',
          },
          {
            type: 'li',
            content: 'Limitation: To the fullest extent permitted by law, Mimic shall not be liable for any damages resulting from your use of the app.',
          },
        ],
      },
    ],
  },
  {
    title: 'Termination',
    children: [
      {
        type: 'p',
        content: 'We reserve the right to terminate or suspend your account and access to Mimic at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of the app.',
      },
    ],
  },
  {
    title: 'Governing Law',
    children: [
      {
        type: 'p',
        content: 'These Terms and Conditions are governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles.',
      },
      {
        type: 'p',
        content: 'Changes to These Terms We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page.',
      },
      {
        type: 'p',
        content: 'Contact Us If you have any questions or concerns about these Terms and Conditions, please contact us at info@mimic.com.',
      },
    ],
  },
];
const TermsAndConditions: React.FC<ITermsAndConditionsProps> = props => {
  return (
    <section className="relative w-full grid place-content-center min-h-[300px] max-w-[100vw] overflow-x-hidden">
      <div
        className="h-screen rounded-b-full -z-10 bg-primary-900 absolute mx-auto w-full  scale-x-[2] -top-[60vh] inset-x-0 mx-auto" />
      <div className="text-white flex flex-col items-center pt-56">
        <h2 className="text-5xl font-bold leading-tight">Terms and conditions</h2>
        <p className="leading-loose">Effective from June 2024</p>
      </div>
      <div className="mt-48 w-6/12 mx-auto text-secondary-900">
        {TERMS_AND_CONDITIONS.map((section, index) => (
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
export default TermsAndConditions;
