import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../../utils/motion";

const NavBar = () => {
  const location = useLocation();
  return (
    <motion.div
      variants={slideInFromRight(0.7)}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <div className="absolute right-20 flex flex-row gap-5 text-green font-body text-xl">
        <div></div>
        <NavLink
          to=""
          className={location.pathname === "" ? "underline" : ""}
        >
          <p className="hover:underline">Home</p>
        </NavLink>
        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "underline" : ""}
        >
          <p className="hover:underline">About</p>
        </NavLink>
        <NavLink
          to="/platform"
          className={location.pathname === "/platform" ? "underline" : ""}
        >
          <p className="hover:underline">Platform</p>
        </NavLink>
        <NavLink
          to="/endorsements"
          className={location.pathname === "/endorsements" ? "underline" : ""}
        >
          <p className="hover:underline">Endorsements</p>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default NavBar;
