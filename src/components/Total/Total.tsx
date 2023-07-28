import './total.scss';
import {useSelector} from 'react-redux';


function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((dessert: { quantity: number; price: number; }) => {
      totalQuantity += dessert.quantity
      totalPrice += dessert.price * dessert.quantity
    })
    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <h2 className="total_summary">Order summary:</h2>
      <div>
      <p className="total__p">
          total ({getTotal().totalQuantity} desserts) 
          : <strong>PLN {getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total