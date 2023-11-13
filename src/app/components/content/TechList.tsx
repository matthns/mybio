import { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiFigma,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoGithub, BiLogoTypescript } from "react-icons/bi";

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
    label: "React.js",
    icon: <FaReact />,
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs />,
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
    label: "Figma",
    icon: <SiFigma />,
  },
  {
    label: "Github",
    icon: <BiLogoGithub />,
  },
];
