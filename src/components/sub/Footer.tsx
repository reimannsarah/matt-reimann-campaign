import { NavLink } from "react-router-dom";
import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";

const Footer = () => {
  return (
    <footer className="absolute top-[3000px] h-[300px] bg-white inset-x-0">
      <div className="flex flex-row justify-between p-16">
        <div className="text-right">
          <h1
            className="font-header text-4xl text-primary"
            style={{ whiteSpace: "pre-line" }}
          >
            {appStrings.footer.header}
          </h1>
        </div>
        <div className="flex flex-row gap-5">
          <img src={imageUrls.fb} alt="facebook icon" className="w-10 h-10" />
          <img
            src={imageUrls.instagram}
            alt="instagram icon"
            className="w-10 h-10"
          />
          <img
            src={imageUrls.twitter}
            alt="twitter icon"
            className="w-10 h-10"
          />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col font-body text-primary text-xl gap-5">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/platform">Platform</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="flex flex-col font-body text-primary text-xl gap-5">
            <NavLink to="/endorsements">Endorsements</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/donate">Donate</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
