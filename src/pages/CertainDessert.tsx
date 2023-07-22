import img from "./../img/photos/Blackcurrant.jpg";
import instaIcon from "./../img/icons/instagram.svg";

const CertainDessert = () => {
    return (<main className="section">
    <div className="container">
        <div className="dessert-details">

            <h1 className="title-1">Blackcurrant Mochi</h1>

            <img src={img} alt="" className="dessert-details__cover" />

            <div className="dessert-details__desc">
                <p>Compound: blackcurrant, mascarpone, cream, Callebaut white chocolate</p>
            </div>

            <a href="#!" className="btn-outline">
                <img src={instaIcon} alt="" />
                GitHub repo
            </a>

        </div>
    </div>
</main>);
};
 
export default CertainDessert;