import React from "react";
import ItemCount from "./ItemCount";

const onAdd = (res) => {
  console.log("si fuera un número se mostraría -> ", res);
};

const ItemListContainer = () => {
  return <ItemCount stock={8} initial={0} onAdd={onAdd} />;
};

export default ItemListContainer;
