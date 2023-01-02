import { motion } from "framer-motion";
import React from "react";
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 2, 1.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-primary-200 rounded-full h-[200px] w-[200px] mt-[345px] animate-ping" />
      <div className="absolute border border-primary-300 rounded-full h-[650px] w-[650px] mt-[345px] animate-pulse" />
      <div className="absolute border border-primary-600 rounded-full h-[800px] w-[800px] mt-[345px] " />
      <div className="absolute border-b h-[480px] w-[495px] mt-[285px] border-primary-300 animate-pulse" />
      <div className="absolute border-l h-[535px] mr-[248px] mt-[230px] border-primary-300 -skew-x-[25deg] animate-pulse" />
      <div className="absolute border-r h-[535px] ml-[248px] mt-[230px] border-primary-300 skew-x-[25deg] animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
