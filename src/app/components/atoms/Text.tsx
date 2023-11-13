import { FC, HTMLProps, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}

export const Text: FC<TextProps> = ({ children, className }) => {
  return <p className={`md:text-2xl ${className}`}>{children}</p>;
};
