import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="absolute bottom-0">
      <h1>Reimann for Portland District 4</h1>
      <NavLink to="/about"></NavLink>
      <NavLink to="/platform"></NavLink>
      <NavLink to="/endorsements"></NavLink>
      <NavLink to="/privacy"></NavLink>
      <NavLink to="/donate"></NavLink>
    </footer>
  );
};

export default Footer;
