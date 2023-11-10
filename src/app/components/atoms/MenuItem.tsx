import Link from "next/link";
import { FC, HTMLProps, ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({ children, className, href }) => {
  return (
    <p
      className={`px-4 py-1 rounded-full  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ${className}`}
    >
      <Link href={href}>{children}</Link>
    </p>
  );
};

export default MenuItem;
