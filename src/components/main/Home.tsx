import Hero from "../sub/Hero";
import Photo from "../sub/Photo";
import DonationsInfo from "../sub/DonationsInfo";

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
        <DonationsInfo />
      </div>
    </div>
  );
};

export default Home;
