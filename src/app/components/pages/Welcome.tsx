import Section from "../templates/Section";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ParticlesBg } from "../particles/Particles";

export const Welcome = () => {
  return (
    <Section className="flex flex-col justify-center" id={"/"}>
      <ParticlesBg />
      <div className="flex flex-col gap-4 md:gap-6 lg:w-1/2">
        <h1 className="font-bold text-5xl md:text-6xl lg:leading-tight">
          Hi, my name is{" "}
          <strong className="text-[#5C82FF]">Matheus Nascimento</strong> and I’m
          Frontend Dev Developer.
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
            <FaGithub className={`hover:text-[#5c82ff]`} />
            <FaLinkedinIn className={`hover:text-[#5c82ff]`} />
          </div>
        </div>
      </div>
    </Section>
  );
};
