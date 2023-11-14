import { ReactNode } from "react";
import { FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import {
  SiFigma,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";

type TechSkillsProps = {
  icon: ReactNode;
  label: string;
};

export const TechSkills: TechSkillsProps[] = [
  {
    label: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    label: "CSS3",
    icon: <SiCss3 />,
  },

  {
    label: "Javacript",
    icon: <RiJavascriptFill />,
  },
  {
    label: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    label: "Styled-components",
    icon: <SiStyledcomponents />,
  },
  {
    label: "React.js",
    icon: <FaReact />,
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    label: "Figma",
    icon: <SiFigma />,
  },
  {
    label: "Git",
    icon: <FaGitAlt />,
  },
  {
    label: "Java",
    icon: <FaJava />,
  },
  {
    label: "SQL/Databases",
    icon: <FaDatabase />,
  },
];
