import * as React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Direction } from '@src/components/atom/Features';

export interface IFeatureCardProps {
  icon: string,
  heading: string,
  description: string,
  bgColor: string
  direction?: string
}

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin', 'latin-ext'],
});
const FeatureCard: React.FC<IFeatureCardProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInVIew = useInView(ref, {
    amount: 0.5,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInVIew) {
      void mainControls.start('visible');
    } else {
      void mainControls.start('hidden');
    }
  }, [isInVIew, mainControls]);
  const variant = props.direction === Direction.LEFT ? {
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
      key={props.heading}
      variants={variant}
      initial="hidden"
      animate={mainControls}
      ref={ref}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.25,
        delay: 0.25,
      }}
      className={`${props.bgColor} px-2.5 py-6 rounded-md items-start flex flex-col`}
    >
      <Image
        src={`/features/${props.icon}`}
        width={300}
        height={620}
        alt={props.heading}
        className="w-9 h-9"
      />
      <div className="flex flex-col space-y-2.5 pt-5">
        <h4 className="text-black font-bold text-base">{props.heading}</h4>
        <p className={`text-sm leading-6 ${poppins.className}`}>
          {props.description}
        </p>
      </div>
    </motion.div>
  );
};
export default FeatureCard;
