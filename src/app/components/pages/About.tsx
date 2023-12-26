import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import { TechSkills } from "../content/SkillsList";
import { MainLayout } from "../templates/MainLayout";

export const About = () => {
  return (
    <MainLayout className="bg-dark-blue" id="about">
      <div className="flex flex-col pt-18">
        <Title className="text-center">About me</Title>
        <Text className="mt-4 text-center">
          Currently I have a degree in Systems Analysis and Development by
          Unicesumar, I have eight years of experience in the technical support
          area. As a software developer I am improving my techniques in Next.js,
          React.js, Design. In my professional career I always seek new
          challenges.
        </Text>
        <div className="mt-10 w-full">
          <Title className="text-center">My skills</Title>
          <ul className="mt-8 grid grid-cols-3 gap-4 items-center place-items-center md:gap-10 md:grid-cols-4 lg:grid-cols-4">
            {TechSkills.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-[8rem] h-fit flex flex-col items-center rounded-md py-2 px-2 border-[1px] border-transparent text-center lg:w-[10rem] hover:border-light-blue hover:shadow-xl hover:shadow-light-blue"
                >
                  <i className="text-4xl md:text-5xl lg:text-5xl">
                    {item.icon}
                  </i>
                  <p className="md:px-4 md:text-xl lg:text-xl">{item.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
