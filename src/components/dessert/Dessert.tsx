import "./style.scss";
// import Blackcurrant from "./../../img/photos/Blackcurrant.jpg";
import {DessertItem} from "./../../pages/Desserts";


const Dessert = ({title, img}: DessertItem) => {
  return (
    <li className="dessert">
      {/* <a href="./dessert-page.html"> */}
        <img src={img} alt="Dessert img" className="dessert__img" />
        <h3 className="dessert__title">{title}</h3>
      {/* </a> */}
    </li>
  );
};

export default Dessert;
