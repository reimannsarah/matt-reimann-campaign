import HeaderText from "../sub/HeaderText";
import NavBar from "../sub/NavBar";
import AccordionNav from "../sub/AccordionNav";

const Header = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center px-28 pt-24">
      <HeaderText />
      <div className="md:hidden">
        <AccordionNav />
      </div>
      <div className="hidden md:block">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
