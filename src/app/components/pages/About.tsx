import { EducationList } from "../content/EducationList";
import { ExperienceList } from "../content/ExperienceList";
import Section from "../atoms/Intersection";
import { PiStudentFill, PiStarFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import Intersection from "../atoms/Intersection";

export const About = () => {
  return (
    <Intersection>
      <main className="bg-dark-blue rounded-xl px-8 md:px-12">
        <div
          className="pt-24 md:flex md:flex-col md:justify-center lg:pt-12"
          id="about"
        >
          <div className="flex items-center gap-4">
            <PiStudentFill className="text-4xl md:text-5xl" />
            <h1 className="font-bold text-2xl md:text-3xl">Education</h1>
          </div>
          <div className="flex flex-col md:mt-4">
            {EducationList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pl-4 my-2 border-l-4 border-light-blue md:my-3"
                >
                  <p className="text-xl md:text-2xl">
                    {item.course} at <strong>{item.college}</strong>
                  </p>
                  Level: {item.level}
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex items-center gap-4 mt-6">
              <MdWork className="text-4xl md:text-5xl" />
              <h1 className="font-bold text-2xl md:text-3xl">Experience</h1>
            </div>
            <div className="flex flex-col my-2">
              {ExperienceList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border-l-4 border-light-blue pl-4 my-2 md:my-3 md:mt-4"
                  >
                    <p className="text-xl md:text-2xl">
                      {item.position} at <strong>{item.where}</strong>
                    </p>
                    {item.level} | {item.period}
                    <div className="mt-2">
                      <strong>My responsabilities:</strong> {item.attr}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mt-6">
              <PiStarFill className="text-4xl md:text-5xl" />
              <h1 className="font-bold text-2xl md:text-3xl">Skills</h1>
            </div>
            <div className="flex flex-col my-2">
              <div className="border-l-4 border-light-blue pl-4 my-2 md:my-3 md:mt-4">
                Teamwork • focus on work • analytic • ready for changes •
                malleable • ready to help • faster to learning • produtivity •
                communication • emotional intelligence • corporate experience
              </div>
            </div>
          </div>
        </div>
      </main>
    </Intersection>
  );
};
