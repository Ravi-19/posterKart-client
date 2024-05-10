import './Product.scss' ; 

import dummyImg from '../../assets/product.webp'
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate() ; 

  return (
    <div className='Product' onClick={()=> navigate(`products/erewr34`)} >
      <div className="productContainer">
        <div className="productImg">
          <div className="imgContainer">
           <img src={dummyImg} alt="product" />
          </div>
        </div>
        <div className="productInfo">
          <p className="title">Museum-Quality Matte Paper Poster 30x40cm</p>
          <p className="productPrice">₹ 599</p>
        </div>

      </div>
    </div>
  )
}

export default Product