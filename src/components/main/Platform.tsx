import Accordion from "../sub/Accordion";
import { appStrings } from "../../assets/text/appStrings";

const Platform = () => {
  return (
    <div>
      <h1 className="font-header text-8xl text-white text-center">Platform</h1>
      <div className="p-4 bg-white rounded-lg mb-96">
        {appStrings.platform.map((issue, index) => {
          return (
            <div>
            <Accordion
              key={index}
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
    </div>
  );
};


export default Platform;
