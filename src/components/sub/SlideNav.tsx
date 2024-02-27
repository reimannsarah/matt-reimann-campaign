import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AccordionNav from "./AccordionNav";

const SlideNav = () => {
  const location = useLocation();
  return (
    <motion.div
      key={location.key}
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 bg-secondary flex justify-between items-center w-full p-10 text-white text-xl z-20"
    >
      <div className="mx-auto md:hidden">
        <AccordionNav />
      </div>
      <div className="hidden md:flex md:flex-col md:items-center">
        <p className="font-header text-white text-2xl">Reimann for Portland</p>
        <p className="font-header text-white text-2xl">District 4</p>
      </div>
      <div className="hidden md:flex md:flex-row md:gap-10">
        <NavLink
          to="/"
          className={`hover:text-green ${
            location.pathname === "/" ? "text-green" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={`hover:text-green${
            location.pathname === "/about" ? "text-green" : ""
          }`}
        >
          About
        </NavLink>
        <NavLink
          to="platform"
          className={`hover:text-green ${
            location.pathname === "/platform" ? "text-green" : ""
          }`}
        >
          Platform
        </NavLink>
        <NavLink
          to="endorsements"
          className={`hover:text-green ${
            location.pathname === "/endorsements" ? "text-green" : ""
          }`}
        >
          Endorsements
        </NavLink>
      </div>
    </motion.div>
  );
};

export default SlideNav;
