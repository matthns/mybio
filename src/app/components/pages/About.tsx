import { EducationList } from "../content/EducationList";
import { ExperienceList } from "../content/ExperienceList";
import Section from "../atoms/Intersection";
import { PiStudentFill, PiStarFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import Intersection from "../atoms/Intersection";
import { useInView } from "react-intersection-observer";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";

import { TechSkills } from "../content/TechList";

export const About = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <main className="w-full h-full bg-dark-blue px-8 md:px-12">
      <Intersection>
        <div
          className="pt-10 md:flex md:flex-col md:justify-center lg:pt-24"
          id="about"
        >
          <div className="flex flex-col">
            <Title>About me</Title>
            <Text className="mt-4">
              Actually I have a degree in Systems Analysis and Development by
              Faculdade Unicesumar, I have eight years of experience in the
              technical support area. As a software developer I am improving my
              techniques in Next.js, React.js, Design (corporate websites,
              corporate applications). In my professional career I seek a
              purpose of learning, new challenges and also multiplying the
              knowledge.
            </Text>

            <div className="mt-10 w-full">
              <Title>My skills</Title>
              <ul className="mt-4 flex gap-4 flex-wrap">
                {TechSkills.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-2 border-l-4 pl-3 border-light-blue"
                    >
                      <i className="text-4xl lg:text-2xl">{item.icon}</i>
                      <p className="lg:text-xl">{item.label}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Intersection>
    </main>
  );
};
