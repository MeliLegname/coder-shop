import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import BackNavigate from "../components/BackNavigate";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
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
        res.filter((doc) => {
          if (doc.id === id) {
            return setProduct(doc);
          }
        });
      })
      .catch((err) => alert("Algo ha salido mal."));
  }, [id]);
  return (
    <>
      {product ? (
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
