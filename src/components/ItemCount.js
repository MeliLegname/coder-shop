import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCounter] = useState(initial);
  if (count > stock) {
    alert("Lo siento, nos hemos quedado sin stock");
    setCounter(count - 1);
  }
  if (count < 0) {
    alert("No puedes contar stock negativo");
    setCounter(count + 1);
  }
  onAdd(count);
  return (
    <div className="w-36	m-2">
      <span className="text-xs italic my-2 text-center text-gray">
        Stock disponible: {stock - count}
      </span>
      <hr className=" my-2 border-gray" />
      <div className="flex justify-center">
        <button
          className="text-2xl text-lila font-bold w-4 hover:opacity-80	 "
          onClick={() => setCounter(count - 1)}
        >
          -
        </button>
        <p className="font-bold p-4 text-xl">{count}</p>
        <button
          className="text-2xl text-lila font-bold  w-4	hover:opacity-80"
          onClick={() => setCounter(count + 1)}
        >
          +
        </button>
      </div>
      <div className="flex flex-col m-auto">
        <button className="border border-lila font-medium	 rounded-2xl w-36 p-2 text-lila text-xs hover:opacity-80">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
