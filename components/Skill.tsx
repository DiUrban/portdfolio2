import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";
type Props = {
  directionLeft?: boolean;
  skill?: Skill;
  projects?: boolean;
};

function SingleSkill({ directionLeft, skill, projects }: Props) {
  return (
    <div className="group relative flex cursor-pointer w-full">
      <motion.div
        className=""
        initial={{
          x:
            directionLeft && projects
              ? -80
              : projects
              ? 80
              : directionLeft
              ? -100
              : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={urlFor(skill?.image).url()}
          width={100}
          height={100}
          alt={skill ? skill.title : "skill"}
          className={`rounded-full  object-cover ${
            projects
              ? " max-sm:w-6 max-sm:h-6 w-8 h-8 xl:w-14 xl:h-14 max-xs:w-4 max-xs:h-4"
              : "max-sm:w-10 max-sm:h-10 w-24 h-24 xl:w-32 xl:h-32 border border-primary-200ß"
          } filter group-hover:grayscale transition duration-300 ease-in-out`}
        />
      </motion.div>
      <div
        className={`absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-primary-200 ${
          projects
            ? "max-sm:w-6 max-sm:h-6 w-8 h-8 xl:w-14 xl:h-14 max-xs:w-4 max-xs:h-4"
            : "max-sm:w-10 max-sm:h-10 w-24 h-24 xl:w-32 xl:h-32 "
        }  rounded-full`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p
            className={`${
              projects
                ? "text-[12px] max-sm:text-[8px] max-sm:-my-0.5 mx-sm:-mx-2 max-xs:text-[5px] max-xs:my-0"
                : "text-xl max-sm:text-[12px] max-sm:-my-2 max-xs:text-[10px]"
            } font-bold text-black opacity-100`}
          >
            {`${skill?.progress}%`}
          </p>
          <p
            className={`${
              projects
                ? "text-[10px] max-sm:text-[8px] max-sm:-my-0.5 mx-sm:-mx-2 max-xs:text-[3.5px] max-xs:my-0"
                : "text-xl max-sm:text-[11px] max-sm:-my-2 max-xs:text-[9px]"
            } font-bold text-black opacity-100`}
          >
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleSkill;
