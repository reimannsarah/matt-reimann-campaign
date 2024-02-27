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
      <div className="absolute right-20 flex flex-row gap-5 text-white md:text-green font-body text-xl">
        <NavLink
          to=""
          className={location.pathname === "" ? "text-white" : ""}
        >
          <p className="hover:text-white">Home</p>
        </NavLink>
        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "text-white" : ""}
        >
          <p className="hover:text-white">About</p>
        </NavLink>
        <NavLink
          to="/platform"
          className={location.pathname === "/platform" ? "text-white" : ""}
        >
          <p className="hover:text-white">Platform</p>
        </NavLink>
        <NavLink
          to="/endorsements"
          className={location.pathname === "/endorsements" ? "text-white" : ""}
        >
          <p className="hover:text-white">Endorsements</p>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default NavBar;
