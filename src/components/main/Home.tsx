import Hero from "../sub/Hero";
import Donations from "./Donations";
import HomePlatform from "../sub/HomePlatform";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="md:mt-44">
        <Hero />
        <Donations />
        <HomePlatform />
        <Contact />
    </div>
  );
};

export default Home;
