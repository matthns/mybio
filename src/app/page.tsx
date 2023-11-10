"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiSolidBusiness } from "react-icons/bi";
import NavBar from "./components/organisms/Header";
import { useUser } from "./components/UserContext";
import { useLoading } from "./components/LoadingContext";
import Header from "./components/organisms/Header";
import { Welcome } from "./components/pages/Welcome";

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

      {/* <div className="flex items-center justify-center mt-[4rem] h-[calc(100vh-4rem)]">
        <div className="flex flex-col gap-6 items-center p-4 lg:flex-row">
          <Image
            className={`rounded-full border-4 border-[#152544]`}
            src={user?.avatar_url}
            alt="My profile photo"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/assets/img/profile.png"
          />
          <div>
            <p className="font-bold text-2xl p-2">
              Hi! My name is {user?.name}
            </p>
            <p className="text-xl p-2">I`m a Front-end Developer</p>
            <p className="text-xl p-2">
              Currently I`m an associate at {""}
              <strong className="hover:bg-white hover:p-1 hover:rounded-md hover:text-black">
                <Link href={"https://mmadevs.com.br"} target="_blank">
                  {" "}
                  MMA Devs
                </Link>
              </strong>
            </p>
            <ul className="list-disc ml-8 mt-4">
              <li className="text-sm">
                Graduated in System Analysis and Development (Unicesumar)
              </li>
              <li>Front-end developer (Ada Tech)</li>
            </ul>
            <ul className="flex flex-row gap-4 mt-4">
              {social.map((socialItem) => {
                return (
                  <li
                    key={socialItem.id}
                    className={`text-4xl transition ease-in-out delay-150 hover:scale-110 hover:duration-300 p-3 bg-[#152544] rounded-xl`}
                  >
                    <Link href={socialItem.href} target="_blank">
                      {socialItem.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-row gap-4"></div>
          </div>
        </div>
      </div> */}
      <Welcome />
    </main>
  );
}
