import "./style.scss";
import Blackcurrant from "./../../img/photos/Blackcurrant.jpg";

const Dessert = () => {
  return (
    <li className="dessert">
      <a href="./dessert-page.html">
        <img src={Blackcurrant} alt="Dessert img" className="dessert__img" />
        <h3 className="dessert__title">Blackcurrant Mochi</h3>
      </a>
    </li>
  );
};

export default Dessert;
