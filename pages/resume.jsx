import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Reynaldi | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Short Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Reynaldi Neo Ramadhani</h2>
          <div className="flex">
            <a
              href="https://instagram.com/rey.nal.di"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/reynaldineo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              {/* <span className="px-1">|</span> Complex Problem Solving */}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque,
          rem repellendus, saepe, laudantium ipsa ab recusandae esse voluptatem
          eum rerum earum quam deserunt. Aspernatur asperiores eaque nihil
          veniam est reiciendis dolorem quidem distinctio sunt nisi, soluta
          fugiat voluptates ab quo neque dolor eum. Repellat aspernatur eum quis
          rem nulla.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Tailwind
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
