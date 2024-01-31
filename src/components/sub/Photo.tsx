import { imageUrls } from "../../assets/imgs/imageUrls"

const Photo = () => {
  return (
    <div className="w-full">
      <img src={imageUrls.skyline} alt="" className='w-full object-cover'/>
    </div>
  )
}

export default Photo