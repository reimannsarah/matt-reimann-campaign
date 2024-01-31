import { Outlet } from "react-router-dom";
import Footer from "../sub/Footer";
import Header from "../main/Header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default Layout;
