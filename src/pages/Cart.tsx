import "./cart.css";
import Total from "../components/Total";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3 className="cart__name">Shopping Cart</h3>
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
};

export default Cart;
