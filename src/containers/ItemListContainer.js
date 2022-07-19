import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { data } from "../utils/products";
import ItemCount from "../components/ItemCount";

const onAdd = (res) => {
  console.log("si fuera un número se mostraría -> ", res);
};

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

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  console.log(products, data);
  getData(data)
    .then((res) => {
      setProducts(res);
    })
    .catch((error) => alert(error));

  return (
    <>
      <ItemList list={products} />
      {/* <ItemCount stock={8} initial={0} onAdd={onAdd} />; */}
    </>
  );
};

export default ItemListContainer;
