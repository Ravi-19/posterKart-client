import './SideCart.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartItem from './../cartItem/CartItem';
import {  useSelector } from 'react-redux';
import { BsCart3 } from "react-icons/bs";
import { axiosClient } from './../../utils/axiosClient';
import {loadStripe} from '@stripe/stripe-js';

function SideCart({onClose}) {
  const cart = useSelector(state => state.cartReducer.cart);
  let totalAmount = 0 ; 

  cart.forEach(item => {
    totalAmount += (item.price)*(item.quantity) ; 
  });
  const isCartEmpty = cart.length === 0 ;

  async function handleCheckout() {
    try {
        const response = await axiosClient.post('/orders', {
            products: cart
          });

        const stripe = await loadStripe(`${import.meta.env.VITE_APP_STRIPE_PUBLISH_KEY}`);
        
        const data = await stripe.redirectToCheckout({
            sessionId: response.data.stripeId
        })

       console.log('stripe data', data);

    } catch (error) {
        console.log(error);
    }
    
}

  return (
    <div className='SideCart'>
        <div className="overlay" onClick={onClose}></div>
        <div className="sideCartContent">
            <div className="sideCartHeader">
                <h3>Shopping Cart</h3>
                <div  onClick={onClose}><IoIosCloseCircleOutline className="closeBtn" /></div>
            </div>
            <div className="cartItems">
               {
                cart?.map (item => {
                  return <CartItem key={item.key} cartItem ={item}/>
                })
              } 
                {/* <CartItem/>
               <CartItem/>
               <CartItem/>  */}
            </div>
            {
              isCartEmpty &&  
              <div className="cartEmpty">
                <div className="cartEmptyIcon"><BsCart3 /></div>
                <h4>Cart is Empty </h4>
              </div>
            }
           
            {
              !isCartEmpty && (
                <>
                  <div className="totalPrice">
                    <div className="totalText">Total : </div>
                     <div className="totalValue">₹ {totalAmount}</div>
                 </div>
                 <div className="primaryBtn checkOutBtn " onClick={handleCheckout}>Checkout now</div>
                </>
              ) 
            }
        </div>
    </div>
  )
}

export default SideCart