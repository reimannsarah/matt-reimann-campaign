import { Outlet } from 'react-router-dom';
import Navbar from '../sub/NavBar'; 
import Footer from '../sub/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;