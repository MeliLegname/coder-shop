import React from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  return (
    <>
      <ItemList />
      {/* <ItemCount stock={8} initial={0}></ItemCount>; */}
    </>
  );
};

export default ItemListContainer;
