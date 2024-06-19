
import React, { type FC } from "react";
import { motion } from "framer-motion";
import { staggerChildren, wordsAnimation } from '@src/lib/animations';
export interface IAnimateWordsProps {
  text: string;
}

const AnimateWords: FC<IAnimateWordsProps> = ({ 
  text,
 }) => {
  return (
    <motion.span variants={staggerChildren} >
      {text.split(" ").map((char, index) => (
        <div key={char + "-" + index} className={"inline-block"}>
          <motion.span  className="inline-block" variants={wordsAnimation}>{char + "\u00A0"}</motion.span>
        </div>
      ))}
    </motion.span>
  );
};
export default AnimateWords;
