import Hero from "../sub/Hero";
import Donations from "./Donations";
import HomePlatform from "../sub/HomePlatform";

const Home = () => {
  return (
    <div className="md:mt-44">
        <Hero />
        <Donations />
        <HomePlatform />
    </div>
  );
};

export default Home;
