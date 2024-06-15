import Image from "next/image";
import { Inter, Mulish } from "next/font/google";
import Hero from "@src/components/Hero";
import HomeAbout from "@src/components/HomeAbout";
import Features from "@src/components/Features";
import FAQ from "@src/components/FAQ";

const mulish = Mulish({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${mulish.className}`}
    >
      <Hero />
      <HomeAbout />
      <Features />
      <FAQ />
    </main>
  );
}
