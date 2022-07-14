import React from "react";
const isLoggedIn = true;

function UserGreeting(props) {
  return <h1>Bienvenido !</h1>;
}
function GuestGreeting(props) {
  return <h1>Debes logearte para realizar la compra.</h1>;
}
const ItemListContainer = () => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default ItemListContainer;
