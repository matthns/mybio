import { FC, HTMLProps, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`font-semibold text-3xl ${className}`}>{children}</h1>;
};
