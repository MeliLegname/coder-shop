import React, { useContext } from "react";
import BackNavigate from "../components/BackNavigate";
import Button from "../components/Button";
import { CartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";

const CartContainer = () => {
  const data = useContext(CartContext);

  const onRemove = (res) => {
    data.removeToCart(res);
  };
  const onClear = () => {
    data.clear();
  };
  return (
    <>
      <BackNavigate />
      {data.cartList.length > 0 ? (
        <div>
          <div className="grid grid-cols-6 gap-4 uppercase text-xs text-gray text-center border-b border-gray-2 mx-8 pb-8">
            <div className=""></div>
            <p className="ml-20	">nombre</p>
            <p className="ml-24	">cantidad</p>
            <p className="ml-28	">precio</p>
            <p className="ml-32	">total</p>
            <div></div>
          </div>
          {data.cartList.map((item, index) => (
            <CartItem item={item} key={index} onRemove={onRemove} />
          ))}
          <div className="flex w-full justify-end p-8">
            <Button
              color="gray"
              description="vaciar carrito"
              icon="delete"
              onClick={onClear}
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center p-80">
          <p className="font-bold text-gray">
            Todavía no hay productos en el carrito.
          </p>
        </div>
      )}
    </>
  );
};

export default CartContainer;
