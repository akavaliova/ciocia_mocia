import Blackcurrant from "./../img/photos/Blackcurrant.jpg";
import Cherry from "./../img/photos/Cherry.jpg";
import Mojito from "./../img/photos/Mojito.jpg";
import PinaColada from "./../img/photos/PinaColada.jpg";
import Mango from "./../img/photos/Mango.jpg";
import Cappuccino from "./../img/photos/Cappuccino.jpg";
import Mint from "./../img/photos/Mint.jpg";
import Bounty from "./../img/photos/Bounty.jpg";
import Matcha from "./../img/photos/Matcha.jpg";
import Milkshake from "./../img/photos/Milkshake.jpg";
import Caramel from "./../img/photos/Caramel.jpg";

const Desserts = () => {
    return (
         <main className="section">
            <div className="container">
        <h2 className="title-1">Desserts</h2>
        <ul className="desserts">
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Blackcurrant} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Blackcurrant Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Cherry} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Cherry Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Mojito} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Strawberry Mojito Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={PinaColada} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Pina-Colada Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Mango} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Mango-Vanilla Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Cappuccino} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Cappuccino Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Mint} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Mint ice cream Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Bounty} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Bounty Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Matcha} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Matcha-raspberry Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Milkshake} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Strawberry milkshake Mochi</h3>
                </a>
            </li>
            <li className="dessert">
                <a href="./dessert-page.html">
                    <img src={Caramel} alt="Dessert img" className="dessert__img" />
                    <h3 className="dessert__title">Peanut caramel Mochi</h3>
                </a>
            </li>
        </ul>
    </div>
</main>
);
}
 
export default Desserts;