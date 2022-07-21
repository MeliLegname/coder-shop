import React from "react";
import { Link } from "react-router-dom";

const BackNavigate = () => {
  return (
    <Link to="/">
      {" "}
      <p className="text-gray p-8"> volver</p>
    </Link>
  );
};

export default BackNavigate;
