import Link from "next/link";
import { Title } from "../atoms/Title";
import { ContactList } from "../content/ContactList";
import { MainLayout } from "../templates/MainLayout";

export const Contact = () => {
  return (
    <MainLayout className="bg-dark-blue" id="contact">
      <Title className="text-center">Contact me</Title>
      <div className="mt-12 flex flex-col items-center justify-center gap-10 lg:mt-24 lg:gap-20 lg:flex-row">
        {ContactList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-2 items-center hover:text-light-blue cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <Link
                href={item.link}
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <i className="text-4xl text-center lg:text-7xl">{item.icon}</i>
                <p>{item.label}</p>
                {item.profile}
              </Link>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};
