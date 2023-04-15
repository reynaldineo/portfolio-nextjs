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
            I’m Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            optio eaque obcaecati minus, eum tempora et fugiat itaque
            repudiandae animi sit quaerat excepturi repellat earum iste beatae
            quia est consequatur magnam natus esse doloremque illum dicta.
            Aspernatur voluptate saepe fuga iusto nostrum velit doloremque
            adipisci quasi neque iste nemo sit voluptas, explicabo aliquid
            consequuntur est exercitationem odit possimus maiores, sed corrupti
            nam quo obcaecati molestiae. Quis quidem asperiores doloremque
            accusamus, soluta alias suscipit, doloribus explicabo quos quas illo
            eligendi cumque.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit id
            sequi iusto veritatis neque magnam inventore quis ea similique
            assumenda ipsum expedita debitis consequatur ad, exercitationem enim
            repellendus. Quam ratione expedita placeat ipsa eum molestiae
            dolorem iusto, porro temporibus, beatae odio aliquid sapiente,
            architecto sed quod non adipisci quis dolores. Laborum inventore
            voluptates dicta nihil unde accusamus at omnis ipsam eos minus
            aliquid illum, neque ullam optio voluptate animi blanditiis aut
            laboriosam qui perspiciatis.
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
