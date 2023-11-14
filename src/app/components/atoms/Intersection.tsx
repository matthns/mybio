"use client";
import { ReactNode, FC } from "react";
import { useInView, InView } from "react-intersection-observer";

interface SectionProps {
  children: ReactNode | ReactNode[];
}

const Intersection: FC<SectionProps> = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="h-full w-full">
      <div
        ref={ref}
        className={`w-full h-full${
          inView
            ? "animate-fade-right animate-delay-[100ms] animate-ease-in-out animate-normal"
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Intersection;
