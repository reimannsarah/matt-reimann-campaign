import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const About = () => {
  return (
    <motion.div
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="visible"
    >
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
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p6}
          </p>
          <p className="font-body text-secondary text-sm md:text-lg">
            {appStrings.about.p7}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
