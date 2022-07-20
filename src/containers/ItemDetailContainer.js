import React, { useState } from "react";
import { data } from "../utils/products";
import ItemDetail from "../components/ItemDetail";
let getData = (prod) => {
  return new Promise((resolve, reject) => {
    if (prod.length > 0) {
      setTimeout(() => {
        resolve(prod[0]);
      }, 2000);
    } else {
      reject(
        "La página no se encuentra disponible en este momento, por favor intente más tarde"
      );
    }
  });
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  getData(data)
    .then((res) => {
      setProduct(res);
    })
    .catch((error) => alert(error));

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
