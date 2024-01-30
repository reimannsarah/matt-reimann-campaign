import { imageUrls } from "../../assets/imgs/imageUrls";
import Button from "./Button";

const Hero = () => {
  const handleClick = () => {
    console.log("Support button clicked");
  };
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
            <Button copy="Support the campaign" onClick={handleClick} />
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
