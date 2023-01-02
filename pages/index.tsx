import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import {
  loadExperiences,
  loadPageInfo,
  loadProjects,
  loadSkills,
  loadSocials,
} from "../lib/loadStaticProps";
type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experiences: Experience[];
};
export default function Home({
  pageInfo,
  skills,
  projects,
  socials,
  experiences,
}: Props) {
  return (
    <div className="bg-primary-500 text-primary-100 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-primary-900 scrollbar-thumb-primary-500">
      <Head>
        <title>Nassr Al-Emranis Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href={"/#hero"}>
        <footer className="sticky bottom-4 cursor-pointer w-full grayscale hover:grayscale-0">
          <div className="">
            <Image
              src={"/Logo.png"}
              width={200}
              height={100}
              className="h-5 w-24 rounded-sm filter  cursor-pointer"
              alt="Logo"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
// @ts-ignore
export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials = await loadSocials();
  const pageInfo = await loadPageInfo();
  const skills = await loadSkills();
  const projects = await loadProjects();
  const experiences = await loadExperiences();
  return {
    props: { pageInfo, skills, projects, socials, experiences },
    revalidate: 3600,
  };
};
