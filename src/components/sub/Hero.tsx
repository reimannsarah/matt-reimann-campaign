import { imageUrls } from "../../assets/imgs/imageUrls";
import { appStrings } from "../../assets/text/appStrings";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="visible"
      className="md:flex md:text-center md:items-center md:justify-center"
    >
      <div className="flex justify-center">
        <div className="inline">
          <p
            className="font-subheader w-full text-white text-2xl ml-7 pb-3 mini:ml-12 mini:text-4xl md:hidden"
            style={{ whiteSpace: "pre-line" }}
          >
            {appStrings.hero.slogan}
          </p>
          <p
            className="hidden md:block font-subheader text-white ml-3 text-6xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {appStrings.hero.slogan_lg}
          </p>
          <button className="bg-white border-2 border-white mini:block mini:mt-24 md:mx-auto rounded-lg ml-3 text-primary py-3 px-5 font-body hover:bg-primary hover:text-white">
            {appStrings.hero.button_long}
          </button>
        </div>
        <img
          src={imageUrls.matt}
          alt="photo of Matt Reimann"
          id="matt_img"
          className="mr-0 w-3/5 md:w-1/5 object-cover float-right"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
