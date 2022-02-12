import React from "react";
import { useCounter } from "./useCounter";
import CartWidgetApp from "./Cartwidget";

const ItemCount = ({ stock, initial }) => {
  const { counter, increment, decrement } = useCounter(initial);
  const onAdd = () => {
    if (stock > 0 && counter !== stock) {
      increment();
    }
  };
  const onRest = () => {
    if (counter > 0) {
      decrement();
    }
  };

  return (
    <>
      <div className="card">
        <div className="card__controllers">
          <button className="btn__primary--small" onClick={() => onRest()}>
            -
          </button>
          <h2>{counter}</h2>
          <button className="btn__primary--small" onClick={() => onAdd()}>
            +
          </button>
        </div>
        <button className="btn__primary--big btn__add">
          Add <CartWidgetApp counter={counter} counterIndication={false} />
        </button>
      </div>
    </>
  );
};

export default ItemCount;
