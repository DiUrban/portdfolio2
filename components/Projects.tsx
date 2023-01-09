import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Project, Skill } from "../typings";
import SingleSkill from "./Skill";
type Props = { projects?: Project[] };
function Projects({ projects }: Props) {
  if (projects) {
    projects.sort((a, b) => {
      return a.pos >= b.pos ? 1 : -1;
    });
  }

  return (
    <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-primary-200 text-2xl max-sm:text-lg">
        {" "}
        Projects
      </h3>
      <div className="relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-primary-500 scrollbar-thumb-primary-900 scrollbar-corner-primary-200 mt-24 max-sm:mt-32 items-center justify-start flex-row start -ml-1">
        {/* projects */}
        {projects?.map((project, i) => (
          <div
            key={project.pos}
            className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-22 h-[80vh] space-x-0 -mt-[20vh]"
          >
            <motion.div
              className="flex items-center justify-center"
              initial={{ y: -90, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                src={urlFor(project.image).url()}
                height={4000}
                width={1000}
                alt="Project"
                className="max-h-96 h-2/3 max-sm:h-full max-sm:w-[90vw]"
              />
            </motion.div>
            <div className="space-y-2 px-0 md:px-10 w-full mx-auto flex-shrink-0">
              <h4 className="text-4xl font-semibold text-center max-sm:text-xl max-md:text-2xl">
                Case study {i + 1} of {projects?.length} :{" "}
                <a href={project.linkToBuild}>
                  <span className="text-decoration underline decoration-wavy hover:decoration-primary-100 hover:decoration-double hover:decoration-1">
                    {project?.title}
                  </span>
                </a>
              </h4>
              <div className="flex flex-row items-center justify-center space-x-1 mx-auto w-max">
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
              <div className="flex w-2/3 max-w-6xl mx-auto">
                <p className="text-lg text-justify inter-word max-sm:text-base max-w-6xl">
                  {project?.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-primary-900/30 h-[500px] left-0 -skew-y-12"></div>
    </div>
  );
}

export default Projects;
