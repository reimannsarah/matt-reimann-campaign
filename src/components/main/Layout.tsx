import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "../sub/Footer";
import Header from "../main/Header";
import SlideNav from "../sub/SlideNav";

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <Header />
      <AnimatePresence>{showNavbar && <SlideNav />}</AnimatePresence>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
