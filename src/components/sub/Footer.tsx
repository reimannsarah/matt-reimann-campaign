import { NavLink } from "react-router-dom";
import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";

const Footer = () => {
  return (
    <footer className="mt-auto h-auto bg-white inset-x-0">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between p-16">
        <div className="text-center md:text-right">
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
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to="/platform" className="hover:underline">Platform</NavLink>
            <NavLink to="/contact" className="hover:underline">Contact</NavLink>
          </div>
          <div className="flex flex-col font-body text-primary text-xl gap-5">
            <NavLink to="/endorsements" className="hover:underline">Endorsements</NavLink>
            <NavLink to="/privacy" className="hover:underline">Privacy</NavLink>
            <NavLink to="/donate" className="hover:underline">Donate</NavLink>
          </div>
        </div>
      </div>
      <p className="text-center md:text-right md:mr-10 text-secondary opacity-30 mb-4">
        {appStrings.copyright}
      </p>
    </footer>
  );
};

export default Footer;
