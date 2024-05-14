import './CartItem.scss' ; 
import messi from '../../assets/messi.jpg'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';


function CartItem({cartItem}) {
  const dispatch = useDispatch()  ;
  return (
    <div className='CartItem'>
      <div className="cartItemImgContainer">
        <img src={cartItem.image} alt="" />
      </div>
      <div className="cartItemInfo">
        <p>{cartItem.title} </p>
        <h4 className="cartItemPrice">₹ {cartItem.price}</h4>
        <div className="priceChanger">
                  <div className="decrement commen"
                    onClick={() => dispatch(removeFromCart(cartItem))}
                  >
                    -
                  </div>
                  <div className="currValue commen">₹ {cartItem.quantity}</div>
                  <div className="increment commen"
                    onClick={() => dispatch(addToCart(cartItem))}
                  >
                    +
                  </div>
              </div>
        <h4 className="subTotal">subTotal: ₹ {cartItem.price*cartItem.quantity}  </h4>
      </div>
    </div>
  )
}

export default CartItem