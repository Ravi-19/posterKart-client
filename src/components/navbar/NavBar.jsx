import './NavBar.scss' ;
import {Link} from 'react-router-dom' ;  
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from 'react';
import SideCart from './../sideCart/SideCart';
import {useSelector} from 'react-redux' ; 
import { PiShoppingCartBold } from "react-icons/pi";


function NavBar() {
  const [isCartActive , setIscartActive] = useState(false ) ; 

  const catagories = useSelector(state => state.catagoryReducer.catagories) ; 

  const cart = useSelector(state => state.cartReducer.cart);
  let totalItems = 0;
  cart.forEach(item => totalItems += item.quantity);

  
  useEffect(()=> {
   // console.log(catagories) ; 
  } , [catagories])
  return (
    <div className='NavBar'>
      <div className="container navContiner">
        <div className="navLeft">
          <ul className='linkGroup'>
          {
            catagories?.map((catagory) => {
              return ( 
                <li key={catagory?.id} className='hoverLink'>
                <Link className='navLink' to={`catagory/${catagory?.attributes.key}`}>{catagory?.attributes.title}</Link>
              </li>
              )
            })
          }
            {/* <li className='hoverLink'>
              <Link className='navLink' to="catagory/comics">comics</Link>
            </li>
            <li className='hoverLink'>
            <Link className='navLink' to="catagory/tv-shows">Tv Shows</Link>
            </li>
            <li className='hoverLink'>
            <Link className='navLink' to="catagory/sports">Sports</Link>
            </li> */}
          </ul>
        </div>
        <div className="navCenter">
          <Link to='/'>
              <h1 className='banner center'>POSTER <PiShoppingCartBold /></h1 >
          </Link></div>
        <div className="navRight">
          <div className="navCart" onClick={() => setIscartActive(!isCartActive)}>
           
             <BsCart3 className='cartIcon hoverLink' />  
             {totalItems > 0 && <span className='cartCount center'>{totalItems}</span>}
            
          </div>
        </div>
      </div>
      {isCartActive && <SideCart onClose={() => setIscartActive(false)} />}
    </div>
  )
}

export default NavBar