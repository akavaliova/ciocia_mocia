import { useParams } from "react-router-dom";
import { useMemo } from "react";
import OrderButton from "../components/orderBtn/OrderButton";
import { desserts } from "./../helpers/dessertsList";
import { DessertItem } from "./Desserts";
// import img from "./../img/photos/Blackcurrant.jpg";
import "./cartDesserts.scss";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CertainDessert = ({img, title, price, quantity=0}) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const dessert = useMemo(
    () => desserts.find((dessert) => dessert.id === Number(id)),
    [id]
  );
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

          {/* <OrderButton link="!!! make a https://... link to the general order page /> */}
          <OrderButton />

          <div className="dessert-details__incrDec">
              <button>-</button>
              <p>{quantity}</p>
              <button>+</button>
            </div>
            <button className="dessert-details__removeButton">Remove</button>
          </div>

        </div>
      </div>

      <div className="shopping-cart" onClick={() => navigate("/cart")}>
        <ShoppingCart id="cartIcon" />
        <p>0</p>
      </div>
    </main>
  );
};

export default CertainDessert;
