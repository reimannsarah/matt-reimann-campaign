import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";

const About = () => {
  return (
    <div>
      <img src={imageUrls.mobile_skyline} className="md:hidden" alt="" />
      <div className="bg-white p-8 mb-16 md:rounded-lg md:mx-36 md:mt-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-header text-primary text-4xl md:text-6xl">
            {appStrings.about.title}
          </h1>
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p1}
          </p>
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p2}
          </p>
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p3}
          </p>
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p4}
          </p>
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p5}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
