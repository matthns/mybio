"use client";
import api from "@/services/api/api_github";
import { Rhodium_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiSolidBusiness } from "react-icons/bi";
import { ImMail4, ImSpinner9 } from "react-icons/im";

const rhodium = Rhodium_Libre({
  subsets: ["latin"],
  weight: ["400"],
});

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

  const [user, setUser] = useState<{ name: string; avatar_url: string }>({
    name: "",
    avatar_url: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const profileData = await api.get(`/users/matthns`);
        setUser(profileData.data);
      } catch (err) {
        console.error("Oops, have error on API GET", err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#000413] text-white flex items-center justify-center">
        <ImSpinner9
          className={"w-8 h-8 mr-2 text-gray-200 animate-spin fill-white"}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#000413] w-screen h-screen p-10 text-white flex justify-center">
      <div className="max-w-screen-2xl w-full h-full">
        <nav className={`${rhodium.className} flex justify-between`}>
          <h1 className={`text-3xl hover:underline cursor-pointer`}>
            <Link href={"/"}>{user?.name.toLowerCase()}</Link>
          </h1>
          <ul className="flex flex-row gap-6 text-xl">
            {menu.map((menuItem) => {
              return (
                <li
                  key={menuItem.id}
                  className="transition ease-in-out delay-150 hover:scale-110 hover:duration-300 hover:text-blue-400"
                >
                  <Link href={menuItem.href}>{menuItem.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-center h-full">
          <div className="flex gap-12 p-4">
            <Image
              className={`rounded-full mb-8 border-4 border-[#152544]`}
              src={user?.avatar_url}
              alt="My profile photo"
              width={300}
              height={300}
            />
            <div className="">
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
        </div>
      </div>
    </div>
  );
}
