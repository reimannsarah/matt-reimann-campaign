import { imageUrls } from "../../assets/imgs/imageUrls";
import { appStrings } from "../../assets/text/appStrings";

const Hero = () => {
  return (
      <div className="flex flex-row justify-center">
        <div className="flex flex-col mt-14">
          <p
            className="font-subheader text-white text-3xl text-right"
            style={{ whiteSpace: "pre-line" }}
          >
            {
              appStrings.hero.slogan
            }
          </p>
          <div className="flex justify-end mt-16">
            <button className="bg-white rounded-lg text-primary py-3 px-5 font-body">{appStrings.hero.button}</button>
          </div>
        </div>
        <img
          src={imageUrls.matt}
          alt=""
          id="hero-img"
          className="object-cover float-right"
        />
      </div>
  );
};

export default Hero;
