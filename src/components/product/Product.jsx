import './Product.scss' ; 

import dummyImg from '../../assets/product.webp'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
  const navigate = useNavigate() ; 

  return (
    <div className='Product' onClick={()=> navigate(`/products/${product?.attributes?.key}`)} >
      <div className="productContainer">
        <div className="productImg">
          <div className="imgContainer">
           <img src={product?.attributes?.image?.data?.attributes?.url} alt="product" />
          </div>
        </div>
        <div className="productInfo">
          <p className="title">{product?.attributes?.title}</p>
          <p className="productPrice">₹ {product?.attributes?.price}</p>
        </div>

      </div>
    </div>
  )
}

export default Product