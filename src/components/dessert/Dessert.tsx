import "./style.scss";
import {DessertItem} from "./../../pages/Desserts";


const Dessert = ({title, img, id}: DessertItem) => {
  return (
    <li className="dessert">
      <a href="./dessert-page.html">
        <img src={img} alt={title} className="dessert__img" />
        <h3 className="dessert__title">{title}</h3>
      </a>
    </li>
  );
};

export default Dessert;
