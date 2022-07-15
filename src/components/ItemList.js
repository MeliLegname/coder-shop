import React, { useState } from "react";
import Item from "./Item";
import { data } from "../utils/products";

let getData = (prod) => {
  return new Promise((resolve, reject) => {
    if (prod.length > 0) {
      resolve(prod);
    } else {
      reject("No hay stock disponible");
    }
  });
};

const ItemList = () => {
  const [products, setProducts] = useState([]);

  getData(data)
    .then((res) => {
      setProducts(res);
    })
    .catch((error) => <h1>{error}</h1>);
  return (
    <div className=" w-screen h-5/6	 grid grid-cols-4 gap-2 mt-8">
      {products.map((item, index) => (
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
