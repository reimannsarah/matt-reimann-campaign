import { useState } from "react";
import { NavLink } from "react-router-dom";

const AccordionNav = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  return (
    <div onClick={() => setAccordionIsOpen(!accordionIsOpen)} className="py-2">
      <button>
        <svg
          className="hb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="#eee"
          strokeWidth=".6"
          fill="rgba(0,0,0,0)"
          strokeLinecap="round"
          style={{ cursor: "pointer" }}
        >
          <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate
              dur="0.2s"
              attributeName="d"
              values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
              fill="freeze"
              begin="start.begin"
            />
            <animate
              dur="0.2s"
              attributeName="d"
              values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
              fill="freeze"
              begin="reverse.begin"
            />
          </path>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="2s"
              id="reverse"
              attributeName="width"
              begin="click"
            />
          </rect>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="0.001s"
              id="start"
              attributeName="width"
              values="10;0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="width"
              values="0;10"
              fill="freeze"
              begin="reverse.begin"
            />
          </rect>
        </svg>
      </button>
      <div
        className={`absolute z-10 grid inset-x-0 overflow-hidden transition-all duration-300 ease-in-out ${
          accordionIsOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-body text-primary text-xl bg-white flex flex-col text-center p-5 ">
          <NavLink to="/" className="py-3 px-5 border-b border-secondary">Home</NavLink>
          <NavLink to="/about" className="py-3 px-5 border-b border-secondary">About</NavLink>
          <NavLink to="/platform" className="py-3 px-5 border-b border-secondary">Platform</NavLink>
          <NavLink to="/endorsements" className="py-3 px-5">Endorsements</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AccordionNav;
