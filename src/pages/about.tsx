import { About, CTA } from "@src/components/atom";
import type { NextPage } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import AboutCard from "@src/components/ui/AboutCard";
import { getDirection } from "@src/components/atom/Features";

const DESCRIPTION = [
  {
    title: "Objective",
    description:
      "Mimic aims to revolutionize social networking with enhanced connectivity and innovative features like SPOTS and MAP for easy event discovery. Our user-friendly platform ensures top-notch security, empowering users to engage meaningfully and simplify daily life",
    image: "objective.png",
  },
  {
    title: "Why Mimic?",
    description:
      "Mimic stands out from other social networking apps by offering a unique blend of social connectivity, local discovery, and task management. Our advanced features, such as SPOTS, live streaming, and Giftmojis, are designed to provide an engaging and practical user experience. Whether you're looking to explore new places, meet new friends, or organize your daily tasks, Mimic is your go-to app.",
    image: "why_mimic.png",
    direction: "lg:flex-col-reverse flex-col",
  },
  {
    title: "Have questions?",
    description:
      "Curious about how Mimic works? Check out our FAQ section to find answers to common questions and get the information you need to make the most of your experience",
    image: "have_questions.png",
    cta: {
      text: "See FAQs",
      href: "/faq",
    },
  },
];
const Page: NextPage = () => {
  return (
    <main className="pt-20">
      <title>MIMIC - About</title>
      <About />
      <section className="flex lg:flex-row flex-col md:w-10/12 w-11/12 justify-between mx-auto lg:space-x-5 lg:space-y-0 space-y-5 pb-28">
        {DESCRIPTION.map((desc, index) => (
          <AboutCard
            position={getDirection(index)}
            {...desc}
            key={desc.title}
          />
        ))}
      </section>
      <CTA />
    </main>
  );
};
export default Page;
