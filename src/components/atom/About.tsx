import { Check } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

export interface IAboutProps {
  hideLearnMore?: boolean;
}

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const FEATURES = [
  "Discover local businesses and events with ease.",
  "Connect with new friends through personalized recommendations",
  "Go live and interact with your followers in real-time",
  "Manage your tasks efficiently with our to-do list feature",
];
const About: React.FC<IAboutProps> = (props) => {
  const { push, prefetch } = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isInVIew = useInView(ref, {
    amount: 0.25
  });
  const mainControls = useAnimation();
  React.useEffect(() => {
    prefetch("/about");
  }, [prefetch]);
  useEffect(() => {
    if (isInVIew) {
      void mainControls.start("visible");
    } else {
      void mainControls.start("hidden");
    }
  }, [isInVIew, mainControls]);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: -100,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.25,
        delay: 0,
      }}
      className="flex w-11/12 lg:flex-row flex-col mx-auto text-secondary-900 py-28"
    >
      <div className="flex-1 flex-col space-y-10">
        <div className="flex flex-col space-y-3.5">
          <div>
            <span className="bg-black/10 py-1.5 px-5 md:text-xs text-2xs rounded-full">
              About Mimic
            </span>
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold w-10/12 lg:leading-snug md:leading-[48px] lg:mt-0 mt-2 text-primary-900">
              The Futuristic Platform for Social Networking
            </h2>
          </div>
          <p
            className={`lg:leading-8 leading-loose ${poppins.className} lg:text-base text-sm`}
          >
            Mimic is a cutting-edge social networking platform designed to
            connect users through shared interests, live interactions, and
            dynamic event discovery. Our mission is to provide a seamless and
            engaging experience, empowering users to explore, connect, and grow
            together.
          </p>
        </div>
        <div className={`flex flex-col space-y-5 ${poppins.className}`}>
          {FEATURES.map((feature) => (
            <div key={feature} className="flex items-center">
              <div className="bg-black text-primary-900 rounded-full p-2 mr-3 bg-primary-900/10 h-fit">
                <Check className="md:w-4.5 md:h-4.5" />
              </div>
              <p className="font-medium my-2 lg:text-base text-sm">{feature}</p>
            </div>
          ))}
        </div>
        {props.hideLearnMore && (
          <Button onClick={() => push("/about")} className="w-fit px-16">
            Learn more
          </Button>
        )}
      </div>
      <div className="flex-1 lg:pt-0 md:pt-16 pt-12 mx-auto">
        <Image
          src="/home_about_illustration.png"
          alt="home about illustration"
          width={570}
          height={550}
        />
      </div>
    </motion.section>
  );
};
export default About;
