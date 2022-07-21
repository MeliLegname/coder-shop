import React from "react";
import { Link } from "react-router-dom";

const Item = ({ type, price, stock, id, name, image }) => {
  return (
    <div className=" w-80	h-96 flex justify-center flex-col content-center rounded-2xl m-auto shadow-lg p-8  ">
      <div className="flex justify-between ">
        <div>
          <p className=" font-bold">
            {type} {name}
          </p>
        </div>
        <span className="text-xl text-lila font-bold">$ {price}</span>
      </div>
      <img src={image} className="h-48 w-fit m-auto my-4	" />
      <span className="text-xs italic my-2 text-center text-gray">
        Stock disponible: {stock}
      </span>
      <Link to={`/item/${id}`} className=" m-auto">
        <button className=" border  rounded-2xl w-32 p-1 text-lila font-medium border-lila text-sm hover:shadow-lg hover:bg-lila hover:text-white  transition  duration-300 ease-in-out ">
          ver más
        </button>
      </Link>
    </div>
  );
};

export default Item;
