import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between text-white	p-2">
      <div className="text-lg	font-bold flex items-center p-2	">CoderShop</div>
      <div>
        <ul className="flex w-2/4	">
          <li className="p-4 cursor-pointer">
            <a> inicio</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a> productos</a>
          </li>
          <li className="p-4 cursor-pointer">
            <a> contacto</a>
          </li>
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
