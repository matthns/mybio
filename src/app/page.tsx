"use client";
import { useState, useEffect } from "react";
import { useUser } from "./components/context/UserContext";
import { useLoading } from "./components/context/LoadingContext";
import Header from "./components/organisms/Header";
import { Welcome } from "./components/pages/Welcome";

import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";

export default function Home() {
  const { user } = useUser();
  const { setLoading } = useLoading();
  const [option, setOption] = useState();

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
