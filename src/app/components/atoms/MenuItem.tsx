import Link from "next/link";
import { FC, HTMLProps, MouseEventHandler, ReactNode } from "react";

interface MenuItemProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  onclick?: MouseEventHandler<HTMLButtonElement>;
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  className,
  href,
  onclick,
}) => {
  return (
    <button
      className={`px-4 py-1 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ${className}`}
      onClick={onclick}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default MenuItem;
