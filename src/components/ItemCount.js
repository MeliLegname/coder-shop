import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCounter] = useState(initial);
  if (count > stock) {
    alert("Lo siento, nos hemos quedado sin stock");
    setCounter(count - 1);
  }
  onAdd(count);
  return (
    <div>
      <div className="flex justify-between">
        <button
          className="text-4xl text-lila font-bold p-2 "
          onClick={() => setCounter(count - 1)}
        >
          -
        </button>
        <p className="font-bold p-4 text-4xl">{count}</p>
        <button
          className="text-3xl text-lila font-bold p-2 "
          onClick={() => setCounter(count + 1)}
        >
          +
        </button>
      </div>
      <button className="border border-lila rounded-2xl w-36 p-2 text-lila text-sm">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
