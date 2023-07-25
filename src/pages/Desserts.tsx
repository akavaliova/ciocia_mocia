import Dessert from "../components/dessert/Dessert";
import { desserts } from "./../helpers/dessertsList";

export interface DessertItem {
  title: string;
  img: string;
  id: number;
  price: number;
}

const Desserts = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Desserts</h2>
        <ul className="desserts">
          {desserts.map((dessert: DessertItem) => {
            return (
              <Dessert 
              key={dessert.id} 
              id={dessert.id} 
              title={dessert.title} 
              img={dessert.img} 
              price={dessert.price}/>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Desserts;
