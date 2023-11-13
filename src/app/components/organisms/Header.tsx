"use client";
import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { useUser } from "../context/UserContext";
import Logo from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [positionY, setPositonY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setPositonY(scrollY);
    });

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const { user } = useUser();

  return (
    <header className="w-full h-18 lg:h-28 lg:fixed lg:top-0 lg:left-0 bg-heavy-blue fixed z-50">
      <div className="max-w-screen-xl ml-auto mr-auto flex justify-between py-4 px-6 h-full">
        <Logo />
        <nav
          className={`flex flex-row gap-6 items-center w-1/2 ${
            isMenuOpen
              ? "absolute flex flex-col w-full h-[100svh] bg-dark-blue top-0 left-0 z-40 items-center justify-center"
              : "hidden lg:flex lg:flex-row lg:justify-end lg:gap-3"
          }`}
        >
          <MenuItem href={"/"} onClick={() => setMenuOpen(false)}>
            home
          </MenuItem>
          <MenuItem href={"#about"} onClick={() => setMenuOpen(false)}>
            about
          </MenuItem>
          <MenuItem href={"#projects"} onClick={() => setMenuOpen(false)}>
            projects
          </MenuItem>
          <MenuItem
            className="text-lg bg-gradient-to-r from-[#1A4EFF] to-[#587EFF] hover:bg-none hover:border-[1px] hover:border-[#587EFF]"
            href={"#contact"}
            onClick={() => setMenuOpen(false)}
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
