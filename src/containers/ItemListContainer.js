import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";
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

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id === undefined) {
      getData(data)
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => alert(error));
    } else {
      getData(data.filter((item) => item.categoryId === parseInt(id)))
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => alert(error));
    }
  }, [id]);

  return (
    <>
      {products.length > 0 ? (
        <ItemList list={products} />
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="font-bold">Cargando productos ...</p>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
