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

// Vova, this IProps do not change anything, I have just imported DessertItem interface and put it in there ({ id, img, title, price, quantity = 0 }: DessertItem)
//check please, but even if I write ({ id, img, title, price, quantity = 0 }: IProps) it does not change anything, quantity does not work and dessert not found.

// interface IProps {
//   id?: number;
//   img?: any;
//   title?: string;
//   price?: string;
//   quantity?: number;
// }

const CertainDessert = ({
  id,
  img,
  title,
  price,
  quantity = 0,
}: DessertItem) => {
  const navigate = useNavigate();
  const { id: paramID } = useParams();

  const cart = useSelector((state: RootState) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((dessert: any) => {
      total += dessert.quantity;
    });
    return total;
  };

  const dessertId = Number(paramID || id);

  const dessert = useMemo(
    () => desserts.find((dessert) => dessert.id === dessertId),
    [paramID, id]
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
              <button onClick={() => dispatch(decrementQuantity(dessert.id))}>
                -
              </button>
              <p>
                {cart?.find((cartItem) => cartItem.id === dessertId)?.quantity}
              </p>
              <button onClick={() => dispatch(incrementQuantity(dessert.id))}>
                +
              </button>
            </div>
            <button
              className="cartItem__removeButton"
              onClick={() => dispatch(removeItem(dessert.id))}
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
