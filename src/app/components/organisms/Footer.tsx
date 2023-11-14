import Logo from "../atoms/Logo";

let date = new Date();

let getYear = date.getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full h-24 py-6 flex flex-col gap-2 items-center justify-center bg-heavy-blue lg:gap-10 lg:flex-row">
      <Logo textSize="text-lg lg:text-lg" imgSize="w-[2rem] lg:w-[2rem]" />

      <p>All rights reserved - {getYear}</p>
    </footer>
  );
};
