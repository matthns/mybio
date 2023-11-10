"use client";
import { ReactNode, FC } from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string;
  children: ReactNode | ReactNode[];
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className, id }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <section
      className={`w-full h-full pt-24 px-8 ${className}`}
      // inView={inView}
      id={id}
    >
      <div
        ref={ref}
        className={`${
          inView
            ? "animate-fade-right animate-delay-[100ms] animate-ease-in-out animate-normal"
            : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
