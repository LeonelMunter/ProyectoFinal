import React from "react";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const en = "EN";
const es = "ES";
const ar = "AR";

const icons = { moon: <FontAwesomeIcon icon={faMoon} />, sun: <FontAwesomeIcon icon={faSun} />, en, es, ar };

const Button = ({ handle_click, name }) => {
  return (
    <div>
      <button className="flex flex-row text-2xl  pr-5 font-bold dark:text-gray-300" onClick={handle_click}>
        {icons[name]}
      </button>
    </div>
  );
};

export default Button;
