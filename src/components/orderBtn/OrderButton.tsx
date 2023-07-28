import "./style.scss";

import Dessert from "../components/dessert/Dessert";
import { desserts } from "../../helpers/dessertsList";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const OrderButton = ({ dessert }) => {
  const dispatch = useDispatch();

  return (
    <button className="btn" onClick={() => dispatch(addToCart(dessert))}>
      Add to Cart
    </button>
  );
};

export default OrderButton;
