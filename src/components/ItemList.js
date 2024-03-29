import React from "react";
import Item from "./Item";
const ItemList = ({ list }) => {
  return (
    <>
      <div className=" w-screen grid grid-cols-1 gap-2 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </>
  );
};

export default ItemList;
