import { useParams } from "react-router-dom";
import { useMemo } from "react";
import OrderButton from "../components/orderBtn/OrderButton";
import { desserts } from "./../helpers/dessertsList";
import { DessertItem } from "./Desserts";
import "./cartDesserts.scss";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from ".././redux/cartSlice";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { RootState } from "../redux/store";

interface IProps {
  image?: any;
  title?: string;
  price?: string;
  quantity?: number;
}

const CertainDessert = ({ image, title, price, quantity = 0 }: IProps) => {
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((dessert: any) => {
      total += dessert.quantity;
    });
    return total;
  };

  const { id } = useParams();
  const dessert = useMemo(
    () => desserts.find((dessert) => dessert.id === Number(id)),
    [id]
  );

  const dispatch = useDispatch();

  if (!dessert) {
    return <div>Dessert not found</div>;
  }

  return (
    <main className="section">
      <div className="container">
        <div className="dessert-details">
          <h1 className="title-1">{dessert.title}</h1>

          <img
            src={dessert.img}
            alt={dessert.title}
            className="dessert-details__cover"
          />

          <div className="dessert-details__desc">
            <p>Compound: {dessert.compound}</p>
            <p>
              Price: {dessert.price} <small>PLN</small>
            </p>

            {/* <OrderButton is a button which adds CertainDessert into a cart*/}
            <OrderButton dessert={dessert} />

            <div className="dessert-details__incrDec">
              <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
              <p>{quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div>
            <button
              className="cartItem__removeButton"
              onClick={() => dispatch(removeItem(id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Extract this into global component and make it available globally */}
      <div className="shopping-cart" onClick={() => navigate("/cart")}>
        <ShoppingCart id="cartIcon" />
        <p>{getTotalQuantity()}</p>
      </div>
    </main>
  );
};

export default CertainDessert;
