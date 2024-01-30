import Hero from "../sub/Hero";
import Photo from "../sub/Photo";
import Donations from "./Donations";
import Platform from "./Platform";

const Home = () => {
  return (
    <div className="mt-80">
      <div >
        <Hero />
      </div>
      <div className='absolute top-[800px] inset-x-0'>
        <Photo />
      </div>
      <div className="absolute top-[1100px] left-1/2 transform -translate-x-1/2">
        <Donations />
      </div>
      <div className="absolute top-[1700px] left-1/2 transform -translate-x-1/2">
        <Platform />
      </div>
    </div>
  );
};

export default Home;
