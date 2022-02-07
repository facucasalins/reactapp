import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
const Cartwidget = ({ show, onMouseEnter, onMouseLeave }) => {
  return (
    <React.Fragment>
      <nav>
        <FaCartArrowDown
          style={{ fontSize: "2rem" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </nav>
      <div className={`cart ${show ? "" : "invisible"}`}>
        <h1>Carrito Vacio</h1>
        <ul>
          <li>Agregue productos al carrito para verlos aqui</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Cartwidget;
