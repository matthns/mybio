"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Rhodium_Libre } from "next/font/google";

import { BiMenu, BiX } from "react-icons/bi";
import { useUser } from "./UserContext";

const rhodium = Rhodium_Libre({
  subsets: ["latin"],
  weight: ["400"],
});

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

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { user } = useUser();

  return (
    <nav
      className={`${rhodium.className} h-16 flex items-center justify-around bg-[#14204d]/30`}
    >
      <h1 className={`text-xl hover:underline cursor-pointer`}>
        <Link href={"/"}>{user?.name.toLowerCase()}</Link>
      </h1>
      <div
        className={` ${
          isMenuOpen
            ? "w-full h-full absolute top-0 flex flex-col bg-slate-900 p-6 items-center justify-center"
            : "hidden lg:block"
        } `}
      >
        <ul
          className={`flex flex-col gap-6 p-6 items-center justify-center lg:flex-row`}
        >
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
      </div>
      <button
        onClick={toggleMenu}
        className={`text-3xl relative text-right p-1 bg-blue-950 rounded-full lg:hidden`}
      >
        {isMenuOpen ? <BiX /> : <BiMenu />}
      </button>
    </nav>
  );
}
