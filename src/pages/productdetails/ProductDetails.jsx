import './ProductDetails.scss'
import messiImg from '../../assets/messi.jpg'

function ProductDetails() {
  const currValue  = 1 ; 
  return (
    <div className='ProductDetails'>
      <div className="container">
        <div className="productImgContainer">
          <div className="insideImgContainer">
            <img src={messiImg} alt="" className="productImg" />
          </div>
        </div>
        <div className="productInfoContainer">
          <div className="productInfoTop">
              <div className="heading">
                <h2>SINCE 7 STORE Lionel Messi Legendary Career Framed Poster For Gifting/For Room Decor/For Football Fans (A4, BLACK)</h2>
              </div>
              <div className="price">
              ₹ 499
              </div>
              <p className="productDesc">
              Lionel Messi & Cristiano Ronaldo Motivational Quotes Wall Posters,(Football, Sports Poster), Pack of 04 Paper Print (18 inch X 12 inch, Each), Rolled .
              </p>
              <div className="priceChanger">
                  <div className="decrement commen">
                    -
                  </div>
                  <div className="currValue commen">{currValue}</div>
                  <div className="increment commen">
                    +
                  </div>
              </div>
              <button className="primaryBtn">
                Add to cart
              </button>
          </div>
          <div className="productInfoButtom">
            <div className="productPrivacyPolicy">
              <ul>
                <li>Product is eligible for replacement within 7 days of delivery if it's damaged/defective/different product delivered to you.</li>
                <li> <strong>Physical Damage, Wrong, Missing Items:</strong> Flipkart may contact you to ascertain the damaged/missing product prior to issuing the replacement.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails