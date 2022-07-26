import React, { useState } from "react";
import Button from "./Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCounter] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCounter(count + 1);
    }
  };
  const decrement = () => {
    if (count > initial + 1) {
      setCounter(count - 1);
    }
  };
  return (
    <div className="w-36	m-2">
      <span className="text-xs italic my-2 text-center text-gray">
        Stock disponible: {stock - count}
      </span>
      <hr className=" my-2 border-gray" />
      <div className="flex justify-center">
        <button
          className="text-2xl text-lila font-bold w-4 hover:opacity-80	 "
          onClick={decrement}
        >
          -
        </button>
        <p className="font-bold p-4 text-xl">{count}</p>
        <button
          className="text-2xl text-lila font-bold  w-4	hover:opacity-80"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className="flex flex-col m-auto">
        <Button
          onClick={() => {
            onAdd(count);
          }}
          color="lila"
          description="Agregar al carrito"
        />
      </div>
    </div>
  );
};

export default ItemCount;
