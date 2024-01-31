import { useState } from "react";
import { NavLink } from "react-router-dom";

const AccordionNav = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  return (
    <div onClick={() => setAccordionIsOpen(!accordionIsOpen)} className="py-2">
      <button>
        <svg
          className="fill-white shrink-0 ml-8"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="6"
            width="24"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionIsOpen ? "rotate-45" : ""
            }`}
          />
          <rect
            y="11"
            width="24"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionIsOpen ? "opacity-0" : ""
            }`}
          />
          <rect
            y="16"
            width="24"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionIsOpen ? "-rotate-45" : ""
            }`}
          />
        </svg>
      </button>
      <div className={`absolute z-10 grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionIsOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/platform">Platform</NavLink>
          <NavLink to="/endorsements">Endorsements</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AccordionNav;
