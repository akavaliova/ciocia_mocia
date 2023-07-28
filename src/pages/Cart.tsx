import "./cart.scss";
import CertainDessert from "./CertainDessert";
import Total from ".././components/Total/Total";
import { useSelector } from "react-redux";
import Dessert from "../components/dessert/Dessert";
import { DessertItem } from "./Desserts";
import { RootState } from "../redux/store";


const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((dessert: any) => (
            <CertainDessert
              key={dessert.id}
              image={dessert.img}
              title={dessert.title}
              price={dessert.price}
              quantity={dessert.quantity}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
};

export default Cart;
