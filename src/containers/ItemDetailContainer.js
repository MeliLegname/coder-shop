import React, { useEffect, useState } from "react";
import { data } from "../utils/products";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router";
import BackNavigate from "../components/BackNavigate";

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
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log();
    if (id === undefined) {
    } else {
      getData(data.filter((item) => item.category.id === parseInt(id)))
        .then((res) => {
          setProduct(res);
        })
        .catch((error) => alert(error));
    }
  }, [id]);
  return (
    <>
      {product.length > 0 ? (
        <>
          <BackNavigate />
          <ItemDetail item={product} />
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="font-bold">Cargando producto ...</p>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
