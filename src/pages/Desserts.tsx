import Dessert from "../components/dessert/Dessert";
import  {desserts} from "./../helpers/dessertsList";

const Desserts = () => {
    return (
         <main className="section">
            <div className="container">
        <h2 className="title-1">Desserts</h2>
        <ul className="desserts">
            {/* {desserts.map(()=>{
                return <Dessert />;
            })} */}
            {/* {console.log(desserts)} */}
            <Dessert title="Best Warsaw Mochi" />
        </ul>
    </div>
</main>
);
}
 
export default Desserts;