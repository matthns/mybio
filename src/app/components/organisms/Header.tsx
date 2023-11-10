"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { useUser } from "../UserContext";
import Logo from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { user } = useUser();

  return (
    <header className="w-full h-18 lg:h-28 lg:fixed lg:top-0 lg:left-0 bg-heavy-blue fixed">
      {/* absolute */}
      <div className="max-w-screen-xl ml-auto mr-auto flex justify-between py-4 px-6 h-full">
        <Logo />
        <nav
          className={`flex flex-row gap-6 items-center w-1/2 ${
            isMenuOpen
              ? "absolute flex flex-col w-full h-[100svh] bg-dark-blue top-0 left-0 z-40 items-center justify-center"
              : "hidden lg:flex lg:flex-row lg:justify-end lg:gap-3"
          }`}
        >
          <MenuItem href={"/"}>home</MenuItem>
          <MenuItem href={"#projects"}>projects</MenuItem>
          <MenuItem
            className="text-lg bg-gradient-to-r from-[#1A4EFF] to-[#587EFF] hover:bg-none hover:border-[1px] hover:border-[#587EFF]"
            href={"#contact"}
          >
            contact me
          </MenuItem>
        </nav>
        <button
          className={`text-4xl hover:text-light-blue z-50 lg:hidden`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>
    </header>
  );
}
