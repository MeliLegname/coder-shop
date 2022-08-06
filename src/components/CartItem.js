import React from "react";

const CartItem = ({ item, onRemove }) => {
  console.log(item, "iteeeeeeeeeeeeem");
  return (
    <div className="flex justify-between items-center  rounded-2xl shadow-lg p-8 m-8	">
      <img className=" max-w-xs md:max-w-sm h-40" src={item.image} />
      <p>
        {item.type} {item.name}
      </p>
      <p>{item.quantity} Unid</p>
      <p>$ {item.price} c/u</p>
      <p>$ {item.price * item.quantity}</p>
      <button
        onClick={() => {
          onRemove(item.id);
        }}
      >
        {" "}
        <img src="/icon_delete.svg" className="w-6 mx-2 fill-red" />
      </button>
    </div>
  );
};

export default CartItem;
