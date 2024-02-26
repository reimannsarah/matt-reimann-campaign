import { useState } from "react";

interface AccordionProps {
  title: string;
  subtitle: string;
  point1: string;
  point2: string;
  point3: string;
  point4?: string;
  point5?: string;
}

const Accordion = (props: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div onClick={() => setAccordionIsOpen(!accordionIsOpen)} className="py-2">
      <button className="flex justify-between items-center w-full">
        <h1 className="font-header text-2xl md:text-4xl text-primary py-3">{props.title}</h1>
        <svg
          className="fill-green shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionIsOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionIsOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionIsOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <strong><p className="py-5 px-8 text-primary font-body md:text-xl">{props.subtitle}</p></strong>
          <ul className="list-disc list-outside py-3 px-10 font-body text-secondary text-sm md:text-lg">
            <li className="pl-3">{props.point1}</li>
            <li className="pl-3">{props.point2}</li>
            <li className="pl-3">{props.point3}</li>
            {props.point4 && <li className="pl-3">{props.point4}</li>}
            {props.point5 && <li className="pl-3">{props.point5}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
