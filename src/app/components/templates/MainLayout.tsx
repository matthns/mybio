import { FC, HTMLProps, ReactNode } from "react";

import { ParticlesBg } from "../particles/Particles";
import { useInView, InView } from "react-intersection-observer";

interface MainLayoutProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  id?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  className,
  id,
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <main
      className={`w-full h-[100svh] flex flex-col items-center px-8 py-24 md:py-28 xl:py-48 ${className}`}
      id={id}
    >
      <aside className="flex-1"></aside>
      <div
        ref={ref}
        className={`w-full max-w-screen-xl flex-2 ${
          inView
            ? " animate-fade-right animate-delay-[100ms] animate-ease-in-out animate-normal"
            : ""
        }`}
      >
        {children}
      </div>
      <aside className="flex-1"></aside>
    </main>
  );
};
