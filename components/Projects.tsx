import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Project, Skill } from "../typings";
import SingleSkill from "./Skill";
type Props = { projects?: Project[] };

function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-primary-200 text-2xl">
        {" "}
        Projects
      </h3>
      <div className="relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-primary-500 scrollbar-thumb-primary-900 scrollbar-corner-primary-200 mt-48 max-sm:mt-32 items-center justify-center">
        {/* projects */}
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-22 h-screen mx-auto"
          >
            <motion.div
              className="flex items-center justify-center"
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={urlFor(project.image).url()}
                height={4000}
                width={7000}
                alt="Project"
                className="max-h-96 max-w-screen-sm w-4/5 h-2/3"
              />
            </motion.div>
            <div className="space-y-2 px-0 md:px-10 max-w-6xl mx-auto flex-shrink-0">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-primary-200">
                  {" "}
                  Case study {i + 1} of {projects?.length}
                </span>
                : {project?.title}
              </h4>
              <div className="flex flex-row items-center justify-center space-x-1 mx-auto ">
                {project?.technologies.map(function (skill: Skill, i) {
                  if ((i + 1) % 2) {
                    let directionLeft = true;
                    return (
                      <SingleSkill
                        key={skill._id}
                        skill={skill}
                        projects={true}
                        directionLeft={directionLeft}
                      />
                    );
                  } else {
                    let directionLeft = false;
                    return (
                      <SingleSkill
                        key={skill?._id}
                        skill={skill}
                        projects={true}
                        directionLeft={directionLeft}
                      />
                    );
                  }
                })}
              </div>
              <p className="text-lg md:text-center sm:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
        {/* projects */}
        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>
      <div className="w-full absolute top-[30%] bg-primary-900/30 h-[500px] left-0 -skew-y-12"></div>
    </div>
  );
}

export default Projects;
