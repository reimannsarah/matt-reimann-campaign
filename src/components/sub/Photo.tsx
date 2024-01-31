import { imageUrls } from "../../assets/imgs/imageUrls"
import { motion } from "framer-motion"
import { fadeIn } from "../../../utils/motion"

const Photo = () => {
  return (
    <motion.div 
    variants={fadeIn(0.5)}
    initial="hidden"
    animate="visible"
    className="w-full"
    >
      <img src={imageUrls.skyline} alt="" className='hidden md:block w-full object-cover'/>
      <img src={imageUrls.mobile_skyline} alt="" className="md:hidden w-full object-cover"/>
    </motion.div>
  )
}

export default Photo