import { appStrings } from "../../assets/text/appStrings";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Endorsements = () => {
  return (
    <motion.div 
    variants={fadeIn(0.5)}
    initial="hidden"
    animate="visible"
    className="my-24 w-screen"
    >
      <h1 className="font-header text-white text-center text-4xl md:text-6xl">{appStrings.endorsements.title}</h1>
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:flex-wrap">
        <div className="w-[300px] h-[300px] border-2 border-white"></div>
        <div className="w-[300px] h-[300px] border-2 border-white"></div>
        <div className="w-[300px] h-[300px] border-2 border-white"></div>
      </div>
    </motion.div>
  );
};

export default Endorsements;
