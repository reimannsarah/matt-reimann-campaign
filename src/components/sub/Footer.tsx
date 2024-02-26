import { NavLink } from "react-router-dom";
import { appStrings } from "../../assets/text/appStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";

const Footer = () => {
  return (
    <footer
      className="mt-auto h-auto w-full"
      style={{
        backgroundImage: `url(${imageUrls.skyline})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between p-16 text-white">
          <div className="text-center md:text-right">
            <h1
              className="font-header text-4xl text-primary"
              style={{ whiteSpace: "pre-line" }}
            >
              {appStrings.footer.header}
            </h1>
          </div>
          <div className="flex flex-row gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
            >
              {" "}
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              width="48px"
              height="48px"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(4,4)">
                  <path d="M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              width="48px"
              height="48px"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(4,4)">
                  <path d="M61.932,15.439c-2.099,0.93 -4.356,1.55 -6.737,1.843c2.421,-1.437 4.283,-3.729 5.157,-6.437c-2.265,1.328 -4.774,2.303 -7.444,2.817c-2.132,-2.26 -5.173,-3.662 -8.542,-3.662c-6.472,0 -11.717,5.2 -11.717,11.611c0,0.907 0.106,1.791 0.306,2.649c-9.736,-0.489 -18.371,-5.117 -24.148,-12.141c-1.015,1.716 -1.586,3.726 -1.586,5.847c0,4.031 2.064,7.579 5.211,9.67c-1.921,-0.059 -3.729,-0.593 -5.312,-1.45c0,0.035 0,0.087 0,0.136c0,5.633 4.04,10.323 9.395,11.391c-0.979,0.268 -2.013,0.417 -3.079,0.417c-0.757,0 -1.494,-0.086 -2.208,-0.214c1.491,4.603 5.817,7.968 10.942,8.067c-4.01,3.109 -9.06,4.971 -14.552,4.971c-0.949,0 -1.876,-0.054 -2.793,-0.165c5.187,3.285 11.348,5.211 17.961,5.211c21.549,0 33.337,-17.696 33.337,-33.047c0,-0.503 -0.016,-1.004 -0.04,-1.499c2.301,-1.624 4.283,-3.674 5.849,-6.015"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col font-body text-primary text-xl gap-5">
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
              <NavLink to="/platform" className="hover:underline">
                Platform
              </NavLink>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </div>
            <div className="flex flex-col font-body text-primary text-xl gap-5">
              <NavLink to="/endorsements" className="hover:underline">
                Endorsements
              </NavLink>
              <NavLink to="/privacy" className="hover:underline">
                Privacy
              </NavLink>
              <NavLink to="/donate" className="hover:underline">
                Donate
              </NavLink>
            </div>
          </div>
        </div>
        <p className="text-center md:text-right md:mr-10 text-white opacity-20 mb-4">
          {appStrings.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
