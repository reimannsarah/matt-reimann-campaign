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
      className="md:flex md:text-center md:items-center md:justify-end mx-16 mb-16"
    >
      <div className="flex flex-col md:items-center md:flex-row md:justify-evenly ">
        <div className="flex flex-col">
        <img
          src={imageUrls.matt2}
          alt="photo of Matt Reimann"
          id="matt_img"
          className="md:hidden mini:w-4/5 mini:mx-auto rounded-xl shadow-2xl"
        />
          <p
            className="font-subheader w-full text-green text-3xl text-center md:text-left md:ml-7 pb-3 md:hidden"
            style={{ whiteSpace: "pre-line" }}
          >
            {appStrings.hero.slogan}
          </p>
          <p
            className="hidden md:block font-subheader text-green ml-3 text-8xl text-right"
            style={{ whiteSpace: "pre-line" }}
          >
            {appStrings.hero.slogan_lg}
          </p>
          <button className="bg-indigo border-2 border-indigo mini:block mini:mt-16 md:text-xl md:w-3/5 rounded-lg md:ml-auto text-white py-3 px-5 font-body hover:bg-green hover:text-primary">
            {appStrings.hero.button_long}
          </button>
        </div>
        <img
          src={imageUrls.matt2}
          alt="photo of Matt Reimann"
          id="matt_img"
          className="hidden md:block md:w-2/5 rounded-tl-3xl rounded-br-3xl shadow-2xl"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
