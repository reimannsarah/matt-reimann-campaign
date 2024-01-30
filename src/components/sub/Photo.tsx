import { imageUrls } from "../../assets/imgs/imageUrls"

const Photo = () => {
  return (
    <div className="absolute inset-x-0 w-screen">
      <img src={imageUrls.skyline} alt="" className='w-full object-cover'/>
    </div>
  )
}

export default Photo