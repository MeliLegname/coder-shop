import React from "react";

const Button = ({ color, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border  rounded-2xl w-36 p-1 text-${color} font-medium border-${color} text-sm hover:shadow-lg hover:bg-${color} hover:text-white  transition  duration-300 ease-in-out`}
    >
      {description}
    </button>
  );
};

export default Button;
