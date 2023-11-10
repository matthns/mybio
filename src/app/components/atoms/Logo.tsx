import Image from "next/image";
import { FC } from "react";

const Logo: FC = ({}) => {
  return (
    <h1 className={`flex flex-row items-center gap-2 cursor-pointer`}>
      <Image
        src={"/assets/icons/code_icon.svg"}
        width={60}
        height={60}
        alt="Code icon"
        className="w-[2.5rem] lg:w-[3.5rem]"
      />
      <p className="font-light text-2xl lg:text-2xl">matheus nascimento</p>
    </h1>
  );
};

export default Logo;
