import Image from "next/image";
import { FC, HTMLProps } from "react";

type LogoProps = {
  textSize?: HTMLProps<HTMLElement>["className"];
  imgSize?: HTMLProps<HTMLElement>["className"];
};

const Logo: FC<LogoProps> = ({ textSize, imgSize }) => {
  return (
    <div className={`flex flex-row items-center gap-2 cursor-pointer `}>
      <Image
        src={"/assets/icons/code_icon.svg"}
        width={60}
        height={60}
        alt="Code icon"
        className={`w-[2.5rem] lg:w-[3.5rem] ${imgSize}`}
      />
      <h1 className={`font-extralight text-2xl lg:text-2xl ${textSize}`}>
        matheus nascimento
      </h1>
    </div>
  );
};

export default Logo;
