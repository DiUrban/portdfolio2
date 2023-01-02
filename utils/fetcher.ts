import { Experience, PageInfo, Project, Skill, Social } from "../typings";
// FETCH SKILLS
export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skill = data.skills;
  return skills;
};
// FETCH SOCIALS
export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const socials: Social = data.socials;
  return socials;
};
// FETCH PROJECTS
export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: Project = data.projects;
  return projects;
};
// FETCH PAGEINFO
export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
// FETCH EXPERIENCE
export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
  );
  const data = await res.json();
  const experiences: Experience = data.experiences;
  return experiences;
};
