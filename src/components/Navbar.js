import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between text-white	p-2">
      <div className="text-lg	font-bold flex items-center p-2">CoderShop</div>
      <div className="w-2/4">
        <ul className="flex justify-between	">
          <li className="p-4 cursor-pointer">Inicio</li>
          <li className="p-4 cursor-pointer">Productos</li>
          <li className="p-4 cursor-pointer flex ">
            <CartWidget />
            <p>Carro de compras</p>
          </li>
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
