import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ReactNode } from "react";

export const ContactList: {
  label: string;
  icon: ReactNode;
  link: string;
  profile: string;
}[] = [
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com/in/matthns",
    profile: "linkedin.com/in/matthns",
  },
  {
    label: "Discord",
    icon: <FaDiscord />,
    link: "mathwns",
    profile: "mathwns",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/matthns",
    profile: "github.com/matthns",
  },
  {
    label: "E-mail",
    icon: <MdEmail />,
    link: "mailto:matthns98@gmail.com",
    profile: "matthns98@gmail.com",
  },
];
