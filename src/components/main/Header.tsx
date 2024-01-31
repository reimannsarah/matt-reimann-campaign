import HeaderText from "../sub/HeaderText";
import NavBar from "../sub/NavBar";
import AccordionNav from "../sub/AccordionNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div className="flex flex-col items-center md:flex-row md:justify-between md:items-center px-28 pt-24">
      <HeaderText />
      <div className="md:hidden">
        <AccordionNav />
      </div>
      <div className="hidden md:block">
        <NavBar />
      </div>
    </motion.div>
  );
};

export default Header;
