import './SideCart.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartItem from './../cartItem/CartItem';

function SideCart({onClose}) {
  return (
    <div className='SideCart'>
        <div className="overlay" onClick={onClose}></div>
        <div className="sideCartContent">
            <div className="sideCartHeader">
                <h3>Shopping Cart</h3>
                <div  onClick={onClose}><IoIosCloseCircleOutline className="closeBtn" /></div>
            </div>
            <div className="cartItems">
               <CartItem/>
               <CartItem/>
               <CartItem/>
            </div>
            <div className="totalPrice">
              <div className="totalText">Total : </div>
              <div className="totalValue">₹ 5000</div>
            </div>
            <div className="primaryBtn checkOutBtn ">Checkout now</div>

        </div>
    </div>
  )
}

export default SideCart