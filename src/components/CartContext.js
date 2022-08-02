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
    const checkInCart = cartList.filter((i) => i.category.id === id).length > 0;
    return checkInCart;
  };

  const removeToCart = (itemD) => {
    const newCartList = cartList.filter((i) => i.category.id !== itemD.id);
    setCartList(newCartList);
  };
  const clear = () => {
    setCartList([]);
  };
  const countItemsFn = (data, num) => {
    if (num) {
      const newValue = countItems + num;
      setCountItems(newValue);
    } else {
      cartList.map((res) => {
        if (res.category.id === data.id) {
          setCountItems(countItems - res.quantity);
        }
      });
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
