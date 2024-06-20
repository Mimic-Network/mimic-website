import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { text } from "stream/consumers";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { WaitlistContext } from "@src/components/providers/WaitlistProvider";
import { MoveUpRight } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { open } = React.useContext(WaitlistContext);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      data-true={props.notHome}
      data-active={isScrolled}
      data-toggled={isMenuOpen}
      className="absolute data-toggled:fixed z-50 top-8 md:w-10/12 w-11/12 px-3 py-4 justify-between rounded-full inset-x-0 mx-auto bg-gradient-glassy border-white border-[0.2px] flex items-center data-true:bg-gradient-glassy-nontransparent transition-all duration-1000 ease-in-out text-white data-true:text-secondary-900 data-toggled:text-white"
    >
      <Link href="/" className="z-50">
        <Image
          src={`/${props.notHome && !isMenuOpen ? "logo_dark.png" : "Logo.png"}`}
          alt="Vercel Logo"
          width={211}
          height={36}
        />
      </Link>
      <div
        className="fixed left-0 right-0 basis-[65%] justify-between inset-y-0 gap-8 top-0 h-full z-30 w-full lg:w-auto items-center flex translate-x-[100%] flex-col gap-4 px-5 py-8 transition-transform duration-700 ease-in-out data-true:-translate-x-0 data-true:bg-black data-true:backdrop-blur-xl lg:relative lg:inset-auto lg:top-0 lg:flex lg:translate-x-0 lg:flex-row lg:items-center  lg:space-x-2 lg:space-y-0 lg:px-0 lg:py-0 lg:data-true:translate-x-0 lg:data-true:bg-transparent"
        data-true={isMenuOpen}
      >
        <div className="flex w-full lg:w-auto md:gap-12 gap-3 lg:flex-row flex-col items-center text-xl lg:text-sm mt-36 lg:mt-0">
          {LINKS.map((link, index) => (
            <Link
              key={link.text}
              data-true={pathname === link.href}
              href={link.href}
              className="data-true:text-primary-900 data-true:rounded-none hover:data-true:rounded-full hover:data-true:text-primary-900 data-true:font-semibold data-true:border-b-2 data-true:border-b-primary-900 lg:data-true:pb-1 data-true:pb-5 data-true:mb-1 data-true:transition-all data-true:duration-500 data-true:ease-in-out w-10/12 lg:w-auto hover:bg-white py-5 lg:py-0 text-center mx-auto rounded-full lg:mx-0 hover:text-primary-900 lg:hover:bg-transparent lg:hover:text-current lg:rounded-none"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <Button onClick={open} className="lg:block hidden">Join the waitlist</Button>
        <Button onClick={open} className="mt-6 pr-2 py-1.5 bg-white lg:hidden block mb-24">
          <div className="flex space-x-3 items-center text-black">
            <span>Join the waitlist</span>
            <div className="w-12 h-12 grid place-content-center rounded-full bg-black">
              <MoveUpRight width={24} height={24} className="w-7 h-auto text-white" />
            </div>
          </div>
        </Button>
      </div>
      <div
        className="relative mr-5 z-50 h-0.5 w-4 cursor-pointer rounded-full bg-white data-active:bg-primary-900 transition-all duration-300 ease-in-out before:absolute before:bottom-2 before:h-0.5 before:w-6 before:rounded-full before:bg-white before:data-active:bg-primary-900 before:transition-all before:duration-300 before:ease-in-out after:absolute after:top-2 after:h-0.5 after:w-6 after:rounded-full after:bg-white after:data-active:bg-primary-900 after:transition-all after:duration-300 after:ease-in-out data-true:bg-transparent data-true:before:top-0 data-true:before:-rotate-45 data-true:after:top-0 data-true:after:rotate-45 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-true={isMenuOpen}
        data-active={props.notHome && !isMenuOpen}
      />
    </nav>
  );
};
export default Navbar;
