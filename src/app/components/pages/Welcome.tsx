import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MainLayout } from "../templates/MainLayout";
import { ParticlesBg } from "../particles/Particles";

export const Welcome = () => {
  return (
    <main className="w-full h-[100svh]">
      <ParticlesBg />
      <MainLayout className="h-full">
        <div className="h-full flex flex-col items-center justify-center gap-4 md:gap-6 lg:w-4/5">
          <div className="mt-24 md:mt-0">
            <h1 className="font-extrabold text-5xl drop-shadow-xl md:text-6xl lg:leading-tight">
              Hi, my name is{" "}
              <strong className="text-light-blue">Matheus Nascimento</strong>{" "}
              and I’m Frontend Developer.
            </h1>
            <div className="my-8">
              <Link
                href={"#about"}
                className="w-fit py-2 px-6 mr-2 rounded-full text-xl bg-gradient-to-r from-[#1A4EFF] to-[#587EFF] hover:bg-none hover:border-[1px] hover:border-[#587EFF] md:text-2xl lg:text-3xl"
              >
                See more
              </Link>

              <div className="my-12 flex gap-6 text-4xl md:text-5xl md:bottom-16">
                <Link
                  href={"https://www.linkedin.com/in/matthns/"}
                  className={`cursor-pointer hover:text-[#5c82ff]`}
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href={"https://github.com/matthns"}
                  className={`cursor-pointer hover:text-[#5c82ff]`}
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </main>
  );
};
