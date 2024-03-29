import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const categoryList = ["remeras", "pantalones", "vestidos", "camperas"];

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
        categoryList.forEach((item) => {
          if (id === item) {
            const productsListFilter = [];
            res.filter((data) => {
              if (data.categoryId === id) {
                productsListFilter.push(data);
                setProducts(productsListFilter);
              }
            });
          } else if (id === undefined) {
            setProducts(res);
          }
        });
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
