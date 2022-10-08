import { Link } from "react-router-dom";

import emptyCart from "../../assets/images/empty-cart.png";

export const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>Cart is empty 😕</h2>
      <p>
        Perhaps, you haven't been ordered pizza yet.
        <br />
        To order pizza, please, go to main page.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/react-pizza-v2" className="button button--black">
        <span>Go to main page</span>
      </Link>
    </div>
  );
};
