import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <>
      <ItemList />
      {/* <ItemCount stock={8} initial={0}></ItemCount>; */}
    </>
  );
};

export default ItemListContainer;
