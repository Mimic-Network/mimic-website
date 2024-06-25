import * as React from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Direction } from '@src/components/atom/Features';
import { useEffect, useRef } from 'react';

export interface IAdvancedFeatureCardProps {
  image: string;
  heading: string;
  description: string;
  direction: Direction;
}

const AdvancedFeatureCard: React.FC<IAdvancedFeatureCardProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInVIew = useInView(ref, {
    amount: 0.15
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInVIew) {
      void mainControls.start("visible");
    } else {
      void mainControls.start("hidden");
    }
  }, [isInVIew, mainControls]);
    const variant = props.direction === Direction.LEFT ? {
        hidden: {
          x: -100,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
          },
        },
      }
      : {
        hidden: {
          x: 100,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
          },
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
          delay: 0,
        }}
        className="bg-white px-8 pt-6 rounded-md items-center flex flex-col"
      >
        <Image
          src={`/features/${props.image}`}
          width={300}
          height={620}
          alt={props.heading}
          className=""
        />
        <div className="flex flex-col space-y-2 pt-5 pb-7">
          <h4 className="text-primary-900 font-semibold md:text-2xl text-xl">
            {props.heading}
          </h4>
          <p className="text-sm leading-6">{props.description}</p>
        </div>
      </motion.div>
  )
    ;
  }
;
export default AdvancedFeatureCard;
;
