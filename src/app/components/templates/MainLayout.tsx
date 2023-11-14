import { FC, HTMLProps, ReactNode } from "react";

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
      className={`w-full min-h-[100svh] flex flex-col items-center px-8 pt-20 lg:pt-28 ${className}`}
      id={id}
    >
      <aside className="flex-1 w-full"></aside>
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
      <aside className="flex-1 w-full"></aside>
    </main>
  );
};
