import { useParams } from "react-router-dom";
import { useMemo } from 'react';
import OrderButton from "../components/orderBtn/OrderButton";
import { desserts } from "./../helpers/dessertsList";
import { DessertItem } from "./Desserts";
import img from "./../img/photos/Blackcurrant.jpg";



const CertainDessert = () => {
  const {id} = useParams();
  const dessert = useMemo(() => 
  desserts.find((dessert) => dessert.id === Number(id)), [id])


  return (
    <main className="section">
      <div className="container">
        <div className="dessert-details">
          <h1 className="title-1">{dessert.title}</h1>

          <img src={dessert.img} alt={dessert.title} className="dessert-details__cover" />

          <div className="dessert-details__desc">
            <p>
              Compound: {dessert.compound}
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
