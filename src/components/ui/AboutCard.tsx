import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { Direction } from "@src/components/atom/Features";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { riseWithFadeIn } from "@src/lib/animations";

export interface IAboutCardProps {
  title: string;
  description: string;
  image: string;
  direction?: string;
  cta?: {
    text: string;
    href: string;
  };
  position: Direction;
}

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin", "latin-ext"],
});
const AboutCard: React.FC<IAboutCardProps> = (props) => {
  const { push } = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isInVIew = useInView(ref, {
    amount: 0.5,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInVIew) {
      void mainControls.start("visible");
    } else {
      void mainControls.start("hidden");
    }
  }, [isInVIew, mainControls]);
  const variant =
    props.position === Direction.LEFT
      ? {
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }
      : {
          hidden: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        };
  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={mainControls}
      key={props.title}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.25,
        delay: 0.25,
      }}
      className={`flex lg:w-10/12 mx-auto rounded-xl px-5 py-9 text-secondary-900 bg-primary-900/10 ${
        props.direction ? props.direction : "flex-col"
      }`}
    >
      <div className="flex-1">
        <Image
          src={`/description/${props.image}`}
          alt={props.title}
          width={654}
          height={659}
        />
      </div>
      <div className="flex flex-col space-y-2.5">
        <h2 className="text-2xl font-semibold w-10/12 leading-snug text-primary-900">
          {props.title}
        </h2>
        <p className={`leading-8 text-sm font-light ${poppins.className}`}>
          {props.description}
        </p>
        {props.cta && (
          <button
            onClick={() => push(props.cta?.href || "")}
            className="w-fit border-b-2 border-b-black pb-1 text-black"
          >
            {props.cta.text}
          </button>
        )}
      </div>
    </motion.div>
  );
};
export default AboutCard;
