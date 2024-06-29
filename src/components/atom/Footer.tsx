import * as React from 'react';
import { LINKS } from './Navbar';
import Link from 'next/link';
import Image from 'next/image';

export interface IFooterProps {}
const SOCIALS = [
  {
    icon: 'facebook.svg',
    href: 'https://www.facebook.com/profile.php?id=61561698539638&mibextid=JRoKGi',
  },
  {
    icon: 'instagram.svg',
    href: 'https://www.instagram.com/mimic_network_com?igsh=MTBwemNwNmQyMGtzcw==',
  },
  {
    icon: 'twitter.svg',
    href: 'https://x.com/mimic_network_?t=YyHpFpqxaothXpP1gAZ2hQ&s=09',
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
      <div className="md:w-10/12 w-11/12 px-3 py-8 justify-between inset-x-0 mx-auto border-b flex items-end">
        <Image src="/logo_dark.png" alt="Vercel Logo" width={211} height={36} />
        <div className="gap-6 lg:flex hidden">
          {LINKS.map((link, index) => (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="md:flex space-x-5 hidden">
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
      <div
        className="md:w-10/12 w-11/12 px-3 py-6 justify-between inset-x-0 mx-auto flex lg:items-center flex-col md:flex-row">
        <div className="flex flex-col space-y-6 lg:hidden pb-6 md:pb-0 border-b md:border-b-0">
          {LINKS.map((link, index) => (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex lg:space-x-8 flex-col lg:flex-row space-y-6 lg:space-y-0 pt-6 md:pt-0">
          {LEGALS.map((legal) => (
            <Link key={legal.text} href={legal.href}>
              {legal.text}
            </Link>
          ))}
        </div>
        <p className="text-center text-secondary-900 py-4 lg:block hidden">
          All right reserved @mimicnetwork2024
        </p>
      </div>
      <div className="flex space-x-5 md:hidden w-11/12 mx-auto py-6 border-t">
        {SOCIALS.map((social) => (
          <Link href={social.href} key={social.icon} target="_blank">
            <Image
              src={`/socials/${social.icon}`}
              width={24}
              height={24}
              alt={social.icon}
              className="w-8 h-8"
            />
          </Link>
        ))}
      </div>
      <p className="md:w-10/12 w-11/12 mx-auto text-center text-secondary-900 py-6 border-t lg:hidden">
        All right reserved @mimicnetwork2024
      </p>
    </footer>
  );
};
export default Footer;
