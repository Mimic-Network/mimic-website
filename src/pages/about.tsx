import { About, CTA } from "@src/components/atom";
import type { NextPage } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin","latin-ext"],
});
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
    direction: "flex-col-reverse",
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
  const { push } = useRouter();
  return (
    <main className="pt-20">
      <About />
      <section className="flex w-10/12 justify-between mx-auto space-x-5 pb-28">
        {DESCRIPTION.map((desc, index) => (
          <div
            key={desc.title}
            className={`flex w-10/12 mx-auto rounded-xl px-5 py-9 text-secondary-900 bg-primary-900/10 ${
              desc.direction ? desc.direction : "flex-col"
            }`}
          >
            <div className="flex-1">
              <Image
                src={`/description/${desc.image}`}
                alt={desc.title}
                width={654}
                height={659}
              />
            </div>
            <div className="flex flex-col space-y-2.5">
              <h2 className="text-2xl font-semibold w-10/12 leading-snug text-primary-900">
                {desc.title}
              </h2>
              <p className={`leading-8 text-sm font-light ${poppins.className}`}>{desc.description}</p>
              {desc.cta && (
                <button onClick={() => push(desc.cta.href)} className="w-fit">
                  {desc.cta.text}
                </button>
              )}
            </div>
          </div>
        ))}
      </section>
      <CTA />
    </main>
  );
};
export default Page;
