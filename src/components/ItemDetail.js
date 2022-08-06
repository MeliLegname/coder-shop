import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [ItemsCount, setItemsCount] = useState(0);
  const data = useContext(CartContext);

  const onAdd = (res) => {
    if (!data.isInCart(item.id)) {
      setItemsCount(res);
      data.addToCart(item, res);
      data.countItemsFn(item, res);
    } else {
      alert("Este producto ya existe en el carrito.");
    }
  };
  return (
    <>
      <div className=" flex rounded-2xl shadow-lg p-8 m-16 m-auto	flex-col lg:flex-row w-auto h-auto	">
        <img src={item.image} className=" m-auto max-w-xs md:max-w-sm" />
        <div className=" h-full flex flex-col justify-between  m-auto  w-40	">
          <div className="flex flex-col  m-2  ">
            <h3 className="text-xl font-bold ">
              {item.type} {item.name}{" "}
            </h3>
            <hr className="border my-2" />
            <span className="text-sm text-gray ">{item.description}</span>
            <span className="py-4 text-2xl text-lila font-bold">
              {" "}
              $ {item.price}
            </span>
          </div>
          <div>
            {ItemsCount === 0 ? (
              <ItemCount
                stock={item.stock}
                initial={ItemsCount}
                onAdd={onAdd}
              />
            ) : (
              <Link to="/cart">
                <Button color="lila" description="Ir al carrito" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
