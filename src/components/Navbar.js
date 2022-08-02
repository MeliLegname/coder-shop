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
          <Link to="/category/1">
            <li className="p-4 cursor-pointer hover:bg-gray">Remeras</li>
          </Link>
          <Link to="category/2">
            <li className="p-4 cursor-pointer hover:bg-gray">Pantalones</li>
          </Link>
          <Link to="category/3">
            <li className="p-4 cursor-pointer hover:bg-gray">Vestidos</li>
          </Link>
          <Link to="category/4">
            <li className="p-4 cursor-pointer hover:bg-gray">Camperas</li>
          </Link>
          <li className="p-4 cursor-pointer flex ">
            <CartWidget items={data.countItems} />
          </li>
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
