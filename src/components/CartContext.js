import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartList([...cartList, newItem]);
  };
  const removeToCart = (itemD) => {
    const newCartList = cartList.filter((i) => i.category.id !== itemD.id);
    setCartList(newCartList);
  };
  const clear = () => {
    setCartList([]);
  };
  return (
    <CartContext.Provider value={{ cartList, addToCart, removeToCart, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
