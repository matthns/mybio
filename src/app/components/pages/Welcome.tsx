import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ParticlesBg } from "../particles/Particles";
import { useInView } from "react-intersection-observer";

export const Welcome = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <main
      className="w-full h-full pt-24 px-8 flex flex-col justify-center md:px-12"
      id={"/"}
    >
      <ParticlesBg />
      <div
        ref={ref}
        className={`${
          inView
            ? "animate-fade-right animate-delay-[100ms] animate-ease-in-out animate-normal"
            : ""
        }`}
      >
        <div className="flex flex-col gap-4 drop-shadow-lg md:gap-6 lg:w-4/5">
          <div>
            <h1 className="font-bold text-5xl md:text-6xl lg:leading-tight">
              Hi, my name is{" "}
              <strong className="text-[#5C82FF]">Matheus Nascimento</strong> and
              I’m Frontend Developer.
            </h1>
            <div className="my-8">
              <Link
                href={"#about"}
                className="w-fit py-2 px-6 mr-2 rounded-full text-xl bg-gradient-to-r from-[#1A4EFF] to-[#587EFF] hover:bg-none hover:border-[1px] hover:border-[#587EFF] md:text-2xl lg:text-3xl"
              >
                See more
              </Link>
              <Link
                href={""}
                className="w-fit py-1 px-2 text-xl italic underline underline-offset-4 hover:text-[#5c82ff] md:text-2xl"
              >
                My resume
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
      </div>
    </main>
  );
};
