import React from "react";
import ItemCount from "./ItemCount";
const onAdd = (res) => {
  console.log("si fuera un número se mostraría -> ", res);
};
const ItemDetail = (props) => {
  console.log(props.item);
  return (
    <>
      <div className=" w-5/6 h-4/6 flex rounded-2xl  shadow-lg p-16 m-16  m-auto	 ">
        <img src={props.item.image} className="h-full w-fit m-auto	" />
        <div className=" h-full flex flex-col justify-between  m-auto ">
          <div className="flex flex-col  m-2  ">
            <p className="text-xl font-bold">
              {props.item.type} {props.item.name}{" "}
            </p>
            <span> Precio: $ {props.item.price}</span>
            <span> Stock disponible: {props.item.stock}</span>
          </div>
          <div>
            <ItemCount stock={props.item.stock} initial={0} onAdd={onAdd} />;
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
