import Image from "next/image";
import { Inter, Mulish } from "next/font/google";
import { CTA, FAQ, Features, Hero, About } from "@src/components/atom";



export default function Home() {
  return (
    <main>
      <title>
         MIMIC - Connect, Discover, and Achieve
      </title>
      <Hero />
      <About hideLearnMore />
      <Features />
      <FAQ />
      <CTA />
    </main>
  );
}
