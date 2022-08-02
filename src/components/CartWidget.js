import React from "react";

const CartWidget = ({ items }) => {
  return (
    <div className="flex items-center">
      <img src="/icon_Cart.svg" className="w-6 mx-2 fill-white" />
      {items > 0 ? (
        <div className="rounded-full bg-red w-5 h-5 flex items-center justify-center">
          <span className="font-semibold	text-white ">{items}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartWidget;
