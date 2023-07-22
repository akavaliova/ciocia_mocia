import { NavLink } from "react-router-dom";
import { DessertItem } from "./../../pages/Desserts";
import "./style.scss";

const Dessert = ({ title, img, id }: DessertItem) => {
  return (
    <NavLink to{`/dessert/${id}`}>
      <li className="dessert">
          <img src={img} alt={title} className="dessert__img" />
          <h3 className="dessert__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Dessert;
