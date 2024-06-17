import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { text } from "stream/consumers";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { WaitlistContext } from '@src/components/providers/WaitlistProvider';

export interface INavbarProps {
  notHome?: boolean;
}
export const LINKS = [
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
const Navbar: React.FC<INavbarProps> = (props) => {
  const { pathname } = useRouter();
  const { open } = React.useContext(WaitlistContext);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);
React.useEffect(() =>{
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);

  }, [handleScroll]);

  return (
    <nav
      data-true={props.notHome}
      data-active={isScrolled}
      className="absolute z-10 top-8 w-10/12 px-3 py-4 justify-between rounded-full inset-x-0 mx-auto bg-gradient-glassy border-white border-[0.2px] flex items-center data-true:bg-gradient-glassy-nontransparent transition-all duration-1000 ease-in-out text-white data-true:text-secondary-900"
    >
      <Link href="/">
        <Image
          src={`/${props.notHome ? "logo_dark.png" : "Logo.png"}`}
          alt="Vercel Logo"
          width={211}
          height={36}
        />
      </Link>
      <div className="space-x-6 flex">
        {LINKS.map((link, index) => (
          <Link
            key={link.text}
            data-true={pathname === link.href}
            href={link.href}
            className="data-true:text-primary-900 text-sm data-true:font-semibold data-true:border-b-2 data-true:border-b-primary-900 data-true:pb-1 data-true:mb-1 data-true:transition-all data-true:duration-500 data-true:ease-in-out"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <Button onClick={open}>Join the waitlist</Button>
    </nav>
  );
};
export default Navbar;
