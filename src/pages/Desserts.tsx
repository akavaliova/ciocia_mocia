import Dessert from "../components/dessert/Dessert";
import { desserts } from "./../helpers/dessertsList";
import "./cartDesserts.scss";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface DessertItem {
  title: string;
  img: string;
  id: number;
  price: number;
  quantity?: number;
}

const Desserts = () => {
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((dessert: any) => {
      total += dessert.quantity;
    });
    return total;
  };

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Desserts</h2>
        <ul className="desserts">
          {desserts.map((dessert) => {
            return (
              <Dessert
                key={dessert.id}
                id={dessert.id}
                title={dessert.title}
                img={dessert.img}
                price={dessert.price}
              />
            );
          })}
        </ul>
      </div>

      <div className="shopping-cart" onClick={() => navigate("/cart")}>
        <ShoppingCart id="cartIcon" />
        <p>{getTotalQuantity() || 0}</p>
      </div>
    </main>
  );
};

export default Desserts;
