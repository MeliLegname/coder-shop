import React from "react";
import { Link } from "react-router-dom";

const BackNavigate = () => {
  return (
    <Link to="/">
      <div className="p-8 flex">
        <img src="/icon_arrow.svg" className="w-3 mx-2 mt-px " />
        <p className="text-gray "> volver</p>
      </div>
    </Link>
  );
};

export default BackNavigate;
