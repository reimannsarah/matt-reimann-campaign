import { imageUrls } from "../../assets/imgs/imageUrls"

const Photo = () => {
  return (
    <div className='absolute top-[800px] inset-x-0'>
      <img src={imageUrls.skyline} alt="" className='w-screen'/>
    </div>
  )
}

export default Photo