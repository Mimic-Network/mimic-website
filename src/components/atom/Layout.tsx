import * as React from "react";
import { Footer, Navbar } from ".";
import { useRouter } from "next/router";
import { LINKS } from "./Navbar";
import { Mulish } from "next/font/google";
import { motion } from "framer-motion";

export interface ILayoutProps {
  children: React.ReactNode;
}
const mulish = Mulish({ subsets: ["cyrillic-ext", "cyrillic"] });
const Layout: React.FC<ILayoutProps> = (props) => {
  const { pathname } = useRouter();
  return (
    <motion.section
      className={`min-height-screen ${mulish.className}`}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.25,
        delay: 0.25,
      }}
    >
      <Navbar notHome={LINKS.some((val) => val.href === pathname)} />
      {props.children}
      <Footer />
    </motion.section>
  );
};
export default Layout;
