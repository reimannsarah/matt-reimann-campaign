import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../utils/motion";

const Header = () => {
  return (
    <motion.div 
    variants={slideInFromLeft(0.5)}
    initial="hidden"
    animate="visible"
    className="relative"
    >
      <div className="text-center md:top-20 md:left-20 text-white flex flex-col gap-3">
      <h1 className="font-header text-8xl">Matt Reimann</h1>
      <p className="font-header text-4xl text-center">For Portland City Council District 4</p>
      </div>
    </motion.div>
  )
}

export default Header