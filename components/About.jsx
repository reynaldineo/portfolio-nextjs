import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/reynaldi.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello, Let me introduce myself. My name is Reynaldi Neo Ramadhani. I
            am a student of computer science at Institut Teknologi Sepuluh
            Nopember (ITS). Currently, I am pursuing a degree in bachelor and I
            am in third semester.
          </p>
          <p className="py-2 text-gray-600">
            As a student, I have a great interest in Website Development. I
            always try to develop myself and expand my knowledge by
            participating in various activities such as community and committee.
          </p>

          <p className="py-2 text-gray-600">
            Furthermore, I have experience in various projects related to my
            major. The project provided me with a lot of valuable lessons and
            experiences that I believe will be useful in the future.
          </p>

          <p className="py-2 text-gray-600">
            Currently, I am building a portfolio that showcases my works and
            achievements during my college years. In this portfolio, I will
            demonstrate my skills and potentials to the readers and potential
            employers.
          </p>

          <p className="py-2 text-gray-600">
            Thank you for your time and attention. I hope to work with you in
            the future.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
