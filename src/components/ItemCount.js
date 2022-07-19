import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCounter] = useState(initial);
  if (count > stock) {
    alert("Lo siento, nos hemos quedado sin stock");
    setCounter(count - 1);
  }
  onAdd(count);
  return (
    <div className="bg-white shadow-lg w-60 h-60 flex flex-col justify-around rounded-2xl	items-center">
      <p>Remera Love</p>
      <div className="flex">
        <button
          className="text-4xl text-lila font-bold p-2 rounded-full shadow-lg h-auto"
          onClick={() => setCounter(count - 1)}
        >
          -
        </button>
        <p className="font-bold p-4 text-4xl">{count}</p>
        <button
          className="text-3xl text-lila font-bold p-2 rounded-full shadow-lg h-auto"
          onClick={() => setCounter(count + 1)}
        >
          +
        </button>
      </div>
      <button className="bg-lila rounded-2xl w-36 p-2 text-white">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
