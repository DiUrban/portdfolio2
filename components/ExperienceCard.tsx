import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
type Props = { experience?: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-min md:w-[600px] lg:w-[900px] snap-center bg-primary-600 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden z-0 mt-20">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          width={100}
          height={100}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 uppercase">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-primary-200">
          {`${experience?.dateStarted} -> 
          ${
            experience?.isCurrentlyWorkingThere
              ? "Present"
              : experience?.dateEnded
          }`}
        </p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className=" mx-auto">{experience?.backgroundInfo}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.points.map((point: string, i: number) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
