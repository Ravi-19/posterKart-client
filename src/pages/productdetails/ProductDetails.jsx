import './ProductDetails.scss'
import messiImg from '../../assets/messi.jpg'
import { useParams } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { useEffect, useState } from 'react';
import Loader from './../../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart} from '../../redux/slices/cartSlice'

function ProductDetails() {
  const params = useParams() ;
  const [product , setProduct] = useState(null) ;  
  const productKey = params.productId ; 
  const dispatch = useDispatch() ; 

  const cart = useSelector(state => state.cartReducer.cart);
  let quantity = cart.find(item => item.key === params.productId)?.quantity || 0;

  async function fetchData() {
    const productResponse = await axiosClient.get(`/products?filters[key][$eq]=${productKey}&populate=image`) ; 

    //console.log(productResponse) ; 
    if(productResponse?.data.data.length>0) {
      setProduct(productResponse?.data.data[0]) ; 
    }
  }

  useEffect(()=> {
    fetchData() ; 
  } ,[params.productId]) ;
  
  if(!product) {
    return <Loader/>
  }
  return (
    <div className='ProductDetails'>
      <div className="container">
        <div className="productImgContainer">
          <div className="insideImgContainer">
            <img src={product?.attributes?.image?.data?.attributes?.url} alt="" className="productImg" />
          </div>
        </div>
        <div className="productInfoContainer">
          <div className="productInfoTop">
              <div className="heading">
                <h2>{product?.attributes?.title}</h2>
              </div>
              <div className="price">
              ₹ {product?.attributes?.price}
              </div>
              <p className="productDesc">
              {product?.attributes?.description}
              </p>
              <div className="priceChanger">
                  <div className="decrement commen"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    -
                  </div>
                  <div className="currValue commen">{quantity}</div>
                  <div className="increment commen"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    +
                  </div>
              </div>
              <button className="primaryBtn" onClick={() => dispatch(addToCart(product))}>
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