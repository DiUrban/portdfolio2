import { motion } from "framer-motion";
import React from "react";
import { Skill } from "../typings";
import SingleSkill from "./Skill";
type Props = { skills?: Skill[] };

function Skills({ skills }: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      {" "}
      <h3 className="absolute top-20 uppercase tracking-[20px] text-primary-200 text-2xl max-sm:text-lg">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-primary-200">
        Hover over a skill for a current proficiency
      </h3>
      <div className="grid gap-5 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 xs:mt-40 sm:mt-32 md:mt-20 lg:mt-16 items-center justify-center h-min">
        {skills?.map(function (skill, i) {
          if ((i + 1) % 2) {
            let directionLeft = true;
            return (
              <SingleSkill
                key={skill._id}
                skill={skill}
                projects={false}
                directionLeft={directionLeft}
              />
            );
          } else {
            let directionLeft = false;
            return (
              <SingleSkill
                key={skill._id}
                skill={skill}
                projects={false}
                directionLeft={directionLeft}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Skills;
