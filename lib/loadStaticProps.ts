import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils/fetcher";

export async function loadPageInfo() {
  const pageInfo = await fetchPageInfo();
  return pageInfo;
}
export async function loadSkills() {
  const skills = await fetchSkills();
  return skills;
}
export async function loadProjects() {
  const projects = await fetchProjects();
  return projects;
}
export async function loadSocials() {
  const socials = await fetchSocials();
  return socials;
}
export async function loadExperiences() {
  const experiences = await fetchExperiences();
  return experiences;
}
