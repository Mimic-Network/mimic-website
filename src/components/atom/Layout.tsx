import * as React from "react";
import { Footer, Navbar } from ".";
import { useRouter } from "next/router";
import { LINKS } from "./Navbar";
import { Mulish } from "next/font/google";

export interface ILayoutProps {
  children: React.ReactNode;
}
const mulish = Mulish({ subsets: ["cyrillic-ext", "cyrillic"] });
const Layout: React.FC<ILayoutProps> = (props) => {
  const { pathname } = useRouter();
  return (
    <section
      className={`min-height-screen ${mulish.className}`}
    >
      <Navbar notHome={LINKS.some((val) => val.href === pathname)} />
      {props.children}
      <Footer />
    </section>
  );
};
export default Layout;
