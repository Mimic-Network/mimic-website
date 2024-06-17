import * as React from 'react';
import { LINKS } from './Navbar';
import Link from 'next/link';
import Image from 'next/image';

export interface IFooterProps {}
const SOCIALS = [
  {
    icon: 'facebook.svg',
    href: 'https://facebook.com',
  },
  {
    icon: 'instagram.svg',
    href: 'https://instagram.com',
  },
  {
    icon: 'twitter.svg',
    href: 'https://twitter.com',
  },
];
const LEGALS = [
  {
    text: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    text: 'Terms and conditions',
    href: '/terms-conditions',
  },
];
const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer className="pt-6  text-secondary-900 text-sm">
      <div className="w-10/12 px-3 py-8 justify-between inset-x-0 mx-auto border-b flex items-end">
        <Image src="/logo_dark.png" alt="Vercel Logo" width={211} height={36} />
        <div className="gap-6 flex">
          {LINKS.map((link, index) => (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex space-x-5">
          {SOCIALS.map((social) => (
            <Link href={social.href} key={social.icon} target="_blank">
              <Image
                src={`/socials/${social.icon}`}
                width={24}
                height={24}
                alt={social.icon}
                className="w-6 h-6"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-10/12 px-3 py-6 justify-between inset-x-0 mx-auto flex items-center">
        <div className="flex space-x-8">
          {LEGALS.map((legal) => (
            <Link key={legal.text} href={legal.href}>
              {legal.text}
            </Link>
          ))}
        </div>
        <p className="text-center text-secondary-900 py-4">
          All right reserved @mimicnetwork2024
        </p>
      </div>
    </footer>
  );
};
export default Footer;
