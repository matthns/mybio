"use client";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiSolidBusiness } from "react-icons/bi";
import { useUser } from "./components/UserContext";
import { useLoading } from "./components/LoadingContext";
import Header from "./components/organisms/Header";
import { Welcome } from "./components/pages/Welcome";

import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";

export default function Home() {
  type MenuItem = {
    id: string;
    label: string;
    href: string;
  };

  const menu: MenuItem[] = [
    {
      id: "1",
      label: "home",
      href: "/",
    },
    {
      id: "2",
      label: "about",
      href: "/about",
    },
    {
      id: "3",
      label: "contact",
      href: "/contact",
    },
    {
      id: "4",
      label: "tools",
      href: "/tools",
    },
  ];

  type SocialItem = {
    id: string;
    label: string;
    icon: any;
    href: string;
  };

  const social: SocialItem[] = [
    {
      id: "1",
      label: "github",
      icon: <AiFillGithub />,
      href: "https://github.com/matthns/",
    },
    {
      id: "2",
      label: "linkedin",
      icon: <BiLogoLinkedin />,
      href: "https://www.linkedin.com/in/matthns/",
    },
    {
      id: "3",
      label: "my business",
      icon: <BiSolidBusiness />,
      href: "https://mmadevs.com.br",
    },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { user } = useUser();
  const { setLoading } = useLoading();

  useEffect(() => {
    if (user.name) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user]); //eslint-disable-line

  return (
    <main className="w-screen h-[100svh] max-w-screen-xl ml-auto mr-auto">
      <Header />
      <Welcome />
      <About />
      <Projects />
    </main>
  );
}
