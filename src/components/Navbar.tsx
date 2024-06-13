import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { text } from "stream/consumers";
import Button from "./ui/Button";

export interface INavbarProps { }

const Navbar: React.FC<INavbarProps> = (props) => {
  const links = [
    {
      text: "About us",
      href: "/about",
    },
    {
      text: "Features",
      href: "/features",
    },
    {
      text: "FAQ",
      href: "/faq",
    },
    {
      text: "Contact us",
      href: "/contact",
    },
  ];
  return (
    <nav className="fixed z-10 top-8 w-10/12 px-3 py-4 justify-between rounded-full inset-x-0 mx-auto bg-gradient-glassy border-white border-[0.2px] flex items-center">
      <Image src="/Logo.png" alt="Vercel Logo" width={211} height={36} />
      <div className="gap-6 flex text-white">
        {links.map((link, index) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
      <Button>
        Join the waitlist
      </Button>
    </nav>
  );
};
export default Navbar;
