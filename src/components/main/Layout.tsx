import { Outlet } from "react-router-dom";
import Navbar from "../sub/NavBar";
import Footer from "../sub/Footer";
import Header from "../sub/Header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default Layout;
