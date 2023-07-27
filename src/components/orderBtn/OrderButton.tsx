import "./style.scss";

import Dessert from "../components/dessert/Dessert";
import { desserts } from "../../helpers/dessertsList";

import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/cartSlice';

const OrderButton = () => {
  return (
    <button className="btn" 
        onClick={() => 
          dispatch(addToCart({
            id, title, image, price
          }))
        }>Add to Cart
      </button>
    
  );
};

export default OrderButton;
