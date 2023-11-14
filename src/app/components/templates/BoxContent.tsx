import { FC, HTMLProps, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  id?: string;
}

export const BoxContent: FC<BoxProps> = ({ children, className }) => {
  return (
    <section
      className={`h-full w-full max-w-screen-xl ml-auto mr-auto  ${className}`}
    >
      {children}
    </section>
  );
};
