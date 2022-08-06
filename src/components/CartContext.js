import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [countItems, setCountItems] = useState(0);

  const addToCart = (item, quantity) => {
    if (quantity > 0) {
      const newItem = { ...item, quantity };
      setCartList([...cartList, newItem]);
    }
  };
  const isInCart = (id) => {
    const checkInCart = cartList.filter((i) => i.id === id).length > 0;
    return checkInCart;
  };

  const removeToCart = (itemD) => {
    console.log("itemdelete", itemD, cartList);
    const newCartList = cartList.filter((i) => i.id == itemD.id);
    console.log(newCartList);
    setCartList(newCartList);
  };
  const clear = () => {
    setCartList([]);
  };
  const countItemsFn = (data, num) => {
    console.log("cartItem data", data);
    console.log("cartItem num", num);
    if (num && num !== 0) {
      const newValue = countItems + num;
      setCountItems(newValue);
    } else {
      if (num === 0) {
        setCountItems(0);
      } else {
        cartList.map((res) => {
          if (res.id === data.id) {
            setCountItems(countItems - res.quantity);
          }
        });
      }
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeToCart,
        clear,
        isInCart,
        countItemsFn,
        countItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
