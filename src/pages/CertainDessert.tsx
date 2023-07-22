import OrderButton from "../components/orderBtn/OrderButton";
import img from "./../img/photos/Blackcurrant.jpg";

const CertainDessert = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="dessert-details">
          <h1 className="title-1">Blackcurrant Mochi</h1>

          <img src={img} alt="" className="dessert-details__cover" />

          <div className="dessert-details__desc">
            <p>
              Compound: blackcurrant, mascarpone, cream, Callebaut white
              chocolate
            </p>
          </div>

          {/* <OrderButton link="!!! make a https://... link to the general order page /> */}
          <OrderButton />
        </div>
      </div>
    </main>
  );
};

export default CertainDessert;
