import React from "react";

const Item = ({ type, price, stock, id, name, image }) => {
  return (
    <div className=" w-80	h-96 flex justify-center flex-col content-center rounded-2xl m-auto shadow-lg p-16  ">
      <div className="flex justify-between m-2">
        <p className=" font-bold">
          {type} {name}
        </p>
        <span>$ {price}</span>
      </div>
      <img src={image} className="h-48 w-fit m-auto	" />
      <p className="m-2 text-center">Stock disponible: {stock}</p>
      <button className=" border rounded-2xl w-32 p-1 text-lila m-auto border-lila text-sm">
        ver más
      </button>
    </div>
  );
};

export default Item;
