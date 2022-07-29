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
    <div>
      <BackNavigate />
      {data.cartList.map((item, index) => (
        <CartItem item={item} key={index} onRemove={onRemove} />
      ))}
      <div className="flex w-full justify-end p-8">
        <Button
          color="red"
          description="vaciar carrito "
          icon="delete"
          onClick={onClear}
        />
      </div>
    </div>
  );
};

export default CartContainer;
