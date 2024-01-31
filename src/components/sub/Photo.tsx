import { imageUrls } from "../../assets/imgs/imageUrls"

const Photo = () => {
  return (
    <div className="w-full">
      <img src={imageUrls.skyline} alt="" className='hidden md:block w-full object-cover'/>
      <img src={imageUrls.mobile_skyline} alt="" className="md:hidden w-full object-cover"/>
    </div>
  )
}

export default Photo