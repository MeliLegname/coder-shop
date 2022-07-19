import React from "react";
import Item from "./Item";

const ItemList = ({ list }) => {
  return (
    <div className=" w-screen h-5/6	 grid grid-cols-4 gap-2 mt-8">
      {list.map((item, index) => (
        <Item
          key={index}
          type={item.type}
          price={item.price}
          stock={item.stock}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemList;
