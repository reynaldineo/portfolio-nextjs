import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import tempGithub from "../public/assets/projects/GitHubTemp.jpeg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Intern Barunastra"
            backgroundImg={tempGithub}
            projectUrl="https://magang-kelompok3.vercel.app/"
            tech="Next Js, Typescript & Tailwind CSS"
          />
          <ProjectItem
            title="Movie with Axios"
            backgroundImg={tempGithub}
            // projectUrl='/twitch'
            projectUrl="https://movie-axios.vercel.app/"
            tech="React, Tailwind, & Axios"
          />
          <ProjectItem
            title="Whack a Mole"
            backgroundImg={tempGithub}
            projectUrl="https://reynaldineo.github.io/whack-a-mole/"
            tech="Vanilla Javascript"
          />
          <ProjectItem
            title="Landing Page"
            backgroundImg={tempGithub}
            projectUrl="https://reynaldineo.github.io/landing-page-sass/"
            tech="Bootstrap & Sass"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
