"use client";
import Intersection from "../atoms/Intersection";
import { useInView } from "react-intersection-observer";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";

import { TechSkills } from "../content/TechList";
import Link from "next/link";

export const Projects = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <main className="w-full h-full bg-dark-blue px-8 md:px-12">
      <Intersection>
        <div
          className="pt-10 md:flex md:flex-col md:justify-center lg:pt-32"
          id="projects"
        >
          <div className="flex flex-col">
            <Title>Projects</Title>
            <div className="mt-10 w-full flex flex-col gap-3">
              <div className="border-2 w-full h-28 flex items-center justify-center rounded-md">
                <Link href={""} className="">
                  MMA DEVS
                </Link>
              </div>
              <div className="border-2 w-full h-28 flex items-center justify-center rounded-md">
                <Link href={""} className="">
                  Digitáxi
                </Link>
              </div>
              <div className="border-2 w-full h-28 flex items-center justify-center rounded-md">
                <Link href={""} className="">
                  Gestão Empresarial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Intersection>
    </main>
  );
};
