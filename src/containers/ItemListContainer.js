import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fireStoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFireStore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataFireStore;
    };
    fireStoreFetch()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) =>
        alert(
          "La página no se encuentra disponible en este momento, por favor intente más tarde"
        )
      );
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
