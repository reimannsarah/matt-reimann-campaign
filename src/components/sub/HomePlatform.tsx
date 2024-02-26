import Accordion from "./Accordion";
import { NavLink } from "react-router-dom";
import { appStrings } from "../../assets/text/appStrings";

const Platform = () => {
  return (
    <div className="md:mb-96">
      <h1 className="font-header mb-5 md:mb-0 text-5xl md:text-8xl text-white text-center">Platform</h1>
      <div className="p-4 md:rounded-lg bg-indigo text-white shadow-2xl">
        {appStrings.platform.map((issue, index) => {
          return (
            <div key={index}>
              <Accordion
                title={issue.title}
                subtitle={issue.subtitle}
                point1={issue.point1}
                point2={issue.point2}
                point3={issue.point3}
                point4={issue.point4}
                point5={issue.point5}
              />
            </div>
          );
        })}
      </div>
      <div className="text-center md:text-right mx-5">
        <NavLink to="/platform">
          <button className="py-3 px-5 rounded-lg bg-indigo text-white font-body my-3 hover:text-white hover:bg-primary">
            Read More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Platform;
