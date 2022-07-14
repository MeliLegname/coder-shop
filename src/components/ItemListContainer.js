import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ isLoggedIn }) => {
  return <ItemCount stock={8} initial={0}></ItemCount>;
};

export default ItemListContainer;
