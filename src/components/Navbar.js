import React, { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  const data = useContext(CartContext);

  return (
    <div className="bg-black flex justify-between text-white	p-2">
      <Link to="/">
        <div className="text-lg	font-bold flex items-center p-2">CoderShop</div>
      </Link>
      <div className="w-2/4">
        <ul className="flex justify-between	">
          <Link to="/category/remeras">
            <li className="p-4 cursor-pointer hover:bg-gray">Remeras</li>
          </Link>
          <Link to="category/pantalones">
            <li className="p-4 cursor-pointer hover:bg-gray">Pantalones</li>
          </Link>
          <Link to="category/vestidos">
            <li className="p-4 cursor-pointer hover:bg-gray">Vestidos</li>
          </Link>
          <Link to="category/camperas">
            <li className="p-4 cursor-pointer hover:bg-gray">Camperas</li>
          </Link>
          <Link to="/cart">
            <li className="p-4 cursor-pointer flex hover:bg-gray">
              <CartWidget items={data.countItems} />
            </li>
          </Link>
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
