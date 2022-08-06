import React, { useContext } from "react";
import BackNavigate from "../components/BackNavigate";
import Button from "../components/Button";
import { CartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const data = useContext(CartContext);

  const onRemove = (res) => {
    data.removeToCart(res);
    data.countItemsFn(res);
  };
  const onClear = () => {
    data.clear();
    data.countItemsFn("", 0);
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
            <p className="ml-32	">Subtotal</p>
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
        <div className="w-full h-screen flex justify-center flex-col	items-center  p-80">
          <p className="font-bold text-gray m-6">
            No hay productos en el carrito.
          </p>
          <Link to="/">
            <button className="border flex rounded-2xl w-36 p-1 text-lila font-medium border-lila text-sm hover:shadow-lg hover:bg-white hover:text-lila  transition  duration-300 ease-in-out justify-center">
              Seguir comprando
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;
