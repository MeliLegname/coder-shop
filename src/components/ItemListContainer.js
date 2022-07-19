import React from "react";
import ItemCount from "./ItemCount";

const onAdd = (res) => {
  console.log("send data for prop", res);
};

const ItemListContainer = ({}) => {
  return <ItemCount stock={8} initial={0} onAdd={onAdd}></ItemCount>;
};

export default ItemListContainer;
