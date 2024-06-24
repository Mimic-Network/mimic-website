import Image from "next/image";
import * as React from "react";
import Button from "../ui/Button";
import { MoveUpRight } from "lucide-react";
import { AbstractLeft, AbstractMiddle, AbstractRight } from "../icons";
import { WaitlistContext } from "@src/components/providers/WaitlistProvider";
import AbstractSmallRight from "../icons/AbstractSmallRight.icon";
import AbstractSmallBottomLeft from "../icons/AbstractSmallBottomLeft.icon";
import AbstractTinyRight from "@src/components/icons/AbstractTinyRight.icon";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { riseWithFadeIn } from "@src/lib/animations";

export interface ICTAProps {}

const CTA: React.FC<ICTAProps> = (props) => {
  const { open } = React.useContext(WaitlistContext);
  const ref = useRef<HTMLDivElement>(null);
  const isInVIew = useInView(ref, {
    amount: 0.5,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInVIew) {
      void mainControls.start("animate");
    } else {
      void mainControls.start("initial");
    }
  }, [isInVIew, mainControls]);
  return (
    <section className="bg-primary-900 lg:pt-4 md:pt-8 pt-11 relative overflow-x-hidden max-w-screen">
      <div className="flex md:w-10/12 w-11/12 lg:flex-row lg:space-y-0 space-y-24 flex-col mx-auto text-white items-center z-10">
        <motion.div
          ref={ref}
          variants={riseWithFadeIn}
          initial="initial"
          animate={mainControls}
          className="flex-1 flex-col space-y-10 z-10"
        >
          <div className="flex flex-col space-y-3.5">
            <div>
              <h2 className="lg:text-5xl md:text-4xl text-3xl md:font-semibold font-bold w-10/12 leading-snug tracking-wide">
                Secure your Own Spot Now!
              </h2>
            </div>
            <p className="leading-8 font-medium">
              Be among the first to experience the future of social networking
              with Mimic! Sign up for our waitlist today and get early access to
              groundbreaking features that connect you with local businesses,
              new friends, and engaging live experiences.
            </p>
          </div>
          <Button
            onClick={open}
            className="shadow-white/25 shadow-md mt-6 pr-2 py-1.5 w-fit"
          >
            <div className="flex space-x-3 items-center w-fit">
              <span>Join the waitlist</span>
              <div className="w-12 h-12 grid place-content-center rounded-full bg-white text-black">
                <MoveUpRight width={24} height={24} className="w-7 h-auto" />
              </div>
            </div>
          </Button>
        </motion.div>
        <motion.div
          className="flex-1 z-10 pb-6 lg:pb-0"
          animate={{
            x: [-5, 0, 5, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src="/cta_illustration.png"
            alt="home about illustration"
            width={654}
            height={659}
          />
        </motion.div>
      </div>
      <AbstractLeft className="absolute h-full left-0 inset-y-0 lg:h-full md:h-[460px] h-[50vh]" />
      <AbstractMiddle className="absolute h-full inset-x-0 m-auto inset-y-0 lg:block hidden" />
      <AbstractRight className="absolute h-full right-0 inset-y-0 -z-0 lg:block hidden" />
      <AbstractSmallRight className="absolute h-full right-0 bottom-1/4 -z-0 lg:hidden md:block md:h-[520px]  hidden" />
      <AbstractTinyRight className="absolute h-full right-0 bottom-1/4 -z-0 lg:hidden block md:h-[520px] h-[50vh]" />
      <AbstractSmallBottomLeft className="absolute h-full left-0 bottom-0 -z-0 lg:hidden block md:h-[400px] h-[50vh]" />
    </section>
  );
};
export default CTA;
