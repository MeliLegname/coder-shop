import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Button from "./Button";

const ItemDetail = (props) => {
  const [ItemsCount, setItemsCount] = useState(0);

  const onAdd = (res) => {
    setItemsCount(res);
    console.log(res);
  };
  console.log(ItemsCount);
  return (
    <>
      <div className=" flex rounded-2xl shadow-lg p-8 m-16 m-auto	flex-col lg:flex-row w-auto h-auto	">
        <img
          src={props.item[0].image}
          className=" m-auto max-w-xs md:max-w-sm	"
        />
        <div className=" h-full flex flex-col justify-between  m-auto  w-40	">
          <div className="flex flex-col  m-2  ">
            <h3 className="text-xl font-bold ">
              {props.item[0].type} {props.item[0].name}{" "}
            </h3>
            <hr className="border my-2" />
            <span className="text-sm text-gray ">
              {props.item[0].description}
            </span>
            <span className="py-4 text-2xl text-lila font-bold">
              {" "}
              $ {props.item[0].price}
            </span>
          </div>
          <div>
            {ItemsCount === 0 ? (
              <ItemCount
                stock={props.item[0].stock}
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
