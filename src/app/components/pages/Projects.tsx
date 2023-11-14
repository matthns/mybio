"use client";
import { Title } from "../atoms/Title";
import Link from "next/link";
import { MainLayout } from "../templates/MainLayout";
import { ProjectsList } from "../content/ProjectsList";
import Image from "next/image";
import { Text } from "../atoms/Text";

export const Projects = () => {
  return (
    <MainLayout className="bg-heavy-blue text-center" id="projects">
      <Title>Projects</Title>
      <Text className="mt-4">
        Here are the projects I was proud to participate in at some or all
        stages.
      </Text>
      <div className="flex flex-col items-center justify-center gap-6 mt-6 md:mt-8 lg:flex-row  lg:mt-10">
        {ProjectsList.map((item, index) => {
          return (
            <div
              key={index}
              className="p-4 border-2 rounded-md border-transparent hover:border-light-blue"
            >
              <Link href={item.link} target="_blank">
                <Image
                  src={item.img}
                  width={600}
                  height={600}
                  alt={item.label}
                  className="w-[20rem] object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};
