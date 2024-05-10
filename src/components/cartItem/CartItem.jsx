import './CartItem.scss' ; 
import messi from '../../assets/messi.jpg'


function CartItem() {
  return (
    <div className='CartItem'>
      <div className="cartItemImgContainer">
        <img src={messi} alt="" />
      </div>
      <div className="cartItemInfo">
        <p>Product Title Here </p>
        <h4 className="cartItemPrice">₹ 499</h4>
        <div className="priceChanger">
                  <div className="decrement commen">
                    -
                  </div>
                  <div className="currValue commen">₹ 499</div>
                  <div className="increment commen">
                    +
                  </div>
              </div>
        <h4 className="subTotal">subTotal: ₹ 499  </h4>
      </div>
    </div>
  )
}

export default CartItem