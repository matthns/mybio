"use client";
import React, { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { useUser } from "../context/UserContext";
import Logo from "../atoms/Logo";
import MenuItem from "../atoms/MenuItem";
import { MenuList } from "../content/MenuOptList";

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
    <header className="w-full h-20 bg-heavy-blue fixed z-40 lg:h-28 lg:top-0 lg:left-0 ">
      <div className="max-w-screen-xl ml-auto mr-auto flex justify-between py-4 px-6 h-full">
        <Logo />
        <nav
          className={`flex flex-row gap-6 items-center w-1/2 ${
            isMenuOpen
              ? "absolute z-50 flex flex-col w-full h-[100vh] bg-dark-blue top-0 left-0 items-center justify-center"
              : "hidden lg:flex lg:flex-row lg:justify-end lg:gap-3"
          }`}
        >
          {MenuList.map((option, index) => {
            return (
              <MenuItem
                key={index}
                href={option.href}
                className={option.style}
                onclick={() => setMenuOpen(false)}
              >
                {option.label}
              </MenuItem>
            );
          })}
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
