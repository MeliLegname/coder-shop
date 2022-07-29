import React from "react";

const Button = ({ color, description, onClick, icon }) => {
  console.log("que color es", color);
  return (
    <button
      onClick={onClick}
      className={`border flex rounded-2xl w-36 p-1 text-${color} font-medium border-${color} text-sm hover:shadow-lg hover:bg-${color} hover:text-${color}  transition  duration-300 ease-in-out justify-center`}
    >
      {icon ? <img src={`/icon_${icon}.svg`} className="w-5 mx-2 " /> : ""}
      {description}
    </button>
  );
};

export default Button;
