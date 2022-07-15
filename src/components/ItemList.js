import React, { useState } from "react";
import Item from "./Item";
import { data } from "../utils/products";

let getData = (prod) => {
  return new Promise((resolve, reject) => {
    if (prod.length > 0) {
      setTimeout(() => {
        resolve(prod);
      }, 2000);
    } else {
      reject(
        "La página no se encuentra disponible en este momento, por favor intente más tarde"
      );
    }
  });
};

const ItemList = () => {
  const [products, setProducts] = useState([]);

  getData(data)
    .then((res) => {
      setProducts(res);
    })
    .catch((error) => alert(error));
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
