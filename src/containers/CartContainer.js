import React, { useContext } from "react";
import BackNavigate from "../components/BackNavigate";
import Button from "../components/Button";
import { CartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const data = useContext(CartContext);
  const algo = () => {};
  const taxs = (data.orderSummary * 10) / 100;
  const total = data.orderSummary + taxs;
  const onRemove = (res) => {
    data.removeToCart(res);
    data.countItemsFn(res);
  };
  const onClear = () => {
    data.clear();
    data.countItemsFn("", 0);
    data.countTotalItems();
  };

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Milagros perez",
        email: "milagrospe@correo.com",
        phone: "1145029947",
      },
      date: "20/04/2022",
      items: data.cartList,
      total: "algo",
    };
  };

  return (
    <>
      <BackNavigate />
      {data.cartList.length > 0 ? (
        <div className="flex">
          <div className="w-3/4">
            {/* <div className="grid grid-cols-6 gap-4 uppercase text-xs text-gray text-center border-b border-gray-2 mx-8 pb-8">
              <div className=""></div>
              <p className="ml-20	">nombre</p>
              <p className="ml-24	">cantidad</p>
              <p className="ml-28	">precio</p>
              <p className="ml-32	">Subtotal</p>
              <div></div>
            </div> */}
            {data.cartList.map((item, index) => (
              <CartItem item={item} key={index} onRemove={onRemove} />
            ))}
          </div>
          <div className="w-1/4 flex flex-col justify-between rounded-2xl shadow-lg p-8 m-8 h-80	">
            {" "}
            <h3 className="text-lg text-center font-semibold uppercase mb-4">
              orden de compra
            </h3>
            <div className="flex justify-between">
              <p className="">Subtotal: </p>
              <span>$ {data.orderSummary}</span>
            </div>
            <div className="flex justify-between">
              <p className="">Impuestos: </p>
              <span>$ {taxs}</span>
            </div>
            <div className="flex justify-between">
              <p className=" text-base font-semibold">Total: </p>
              <span>$ {total}</span>
            </div>
            <hr></hr>
            <div className="flex">
              <Button
                className=" mr-4 "
                color="gray"
                description="Vaciar carrito"
                onClick={onClear}
              />
              <Button
                color="lila"
                description="Comprar ahora"
                onClick={onClear}
              />
            </div>
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
