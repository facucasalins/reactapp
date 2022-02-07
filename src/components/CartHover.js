import { useState } from "react";
import Cartwidget from "./Cartwidget";

const CartHover = () => {
  const [show, setShow] = useState(false);
  const showCart = (e) => {
    setShow(!show);
  };
  const hideCart = (e) => {
    setShow(false);
  };
  return (
    <>
      <div>
        <Cartwidget
          show={show}
          onMouseEnter={showCart}
          onMouseLeave={hideCart}
        />
      </div>
    </>
  );
};
export default CartHover;
