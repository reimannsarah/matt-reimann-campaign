import { imageUrls } from "../../assets/imgs/imageUrls";
import { appStrings } from "../../assets/text/appStrings";

const Hero = () => {
  return (
      <div className="flex flex-row justify-end float-right">
        <div className="flex flex-col mt-14">
          <p
            className="font-subheader text-white text-6xl text-right"
            style={{ whiteSpace: "pre-line" }}
          >
            {
              "Lorem ipsum dolor\n sit amet, consectetur\n adipiscing elit, sed do\n eiusmod"
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
          className="w-2/5 float-right"
        />
      </div>
  );
};

export default Hero;
