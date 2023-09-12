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
  const [user, setUser] = useState<{ name: string; avatar_url: string }>({
    name: "",
    avatar_url: "",
  });
  const [loading, setLoading] = useState(true);

  //   api
  //     .get(`/users/matthns`)
  //     .then((response) => setUser(response.data))
  //     .catch((err) => {
  //       console.error("API GET error" + err);
  //     });
  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   async function loadProfile() {
  //     const [response] = await Promise.all([api.get(`/users/matthns`)]);
  //     setUser(response.data);
  //   }
  //   loadProfile();
  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   async function loadProfile() {
  //     const [profileData] = await Promise.all([api.get(`/users/matthns`)]);
  //     setUser(profileData.data);
  //   }
  //   loadProfile();
  //   setLoading(false);
  // }, []);

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
    <div className="bg-[#000413] w-screen h-screen p-10 text-white">
      <div className="flex flex-col items-center mt-4 p-4">
        <h2
          className={`${rhodium.className} text-center text-3xl mb-6 hover:underline cursor-pointer`}
        >
          {user?.name.toLowerCase()}
        </h2>
        <Image
          className={`rounded-full mb-8 border-4 border-blue-300`}
          src={user?.avatar_url}
          alt="My profile photo"
          width={300}
          height={300}
        />
        <div className="">
          <p className="font-bold text-2xl p-2">Hi! My name is {user?.name}</p>
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
          <div className="mt-6 flex flex-row gap-4">
            <Link href={"https://github.com/matthns/"} target="_blank">
              <AiFillGithub
                size={40}
                className={
                  "transition ease-in-out delay-150 hover:scale-110 hover: duration-300"
                }
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/matthns/"} target="_blank">
              <BiLogoLinkedin
                size={40}
                className={
                  "transition ease-in-out delay-150 hover:scale-110 hover: duration-300"
                }
              />
            </Link>
            <Link href={"https://mmadevs.com.br"} target="_blank">
              <BiSolidBusiness
                size={40}
                className={
                  "transition ease-in-out delay-150 hover:scale-110 hover: duration-300"
                }
              />
            </Link>
            <Link href={"mailto:matthns98@gmail.com"} target="_blank">
              <ImMail4
                size={40}
                className={
                  "transition ease-in-out delay-150 hover:scale-110 hover: duration-300"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
