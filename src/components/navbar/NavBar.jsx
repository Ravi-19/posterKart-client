import './NavBar.scss' ;
import {Link} from 'react-router-dom' ;  
import { BsCart3 } from "react-icons/bs";
import { useState } from 'react';
import SideCart from './../sideCart/SideCart';


function NavBar() {
  const [isCartActive , setIscartActive] = useState(false ) ; 
  
  return (
    <div className='NavBar'>
      <div className="container navContiner">
        <div className="navLeft">
          <ul className='linkGroup'>
            <li className='hoverLink'>
              <Link className='navLink' to="catagory/comics">comics</Link>
            </li>
            <li className='hoverLink'>
            <Link className='navLink' to="catagory/tv-shows">Tv Shows</Link>
            </li>
            <li className='hoverLink'>
            <Link className='navLink' to="catagory/sports">Sports</Link>
            </li>
          </ul>
        </div>
        <div className="navCenter">
          <Link to='/'>
              <h1 className='banner'>POSTERZ.</h1 >
          </Link></div>
        <div className="navRight">
          <div className="navCart" onClick={() => setIscartActive(!isCartActive)}>
           
             <BsCart3 className='cartIcon hoverLink' />  
            <span className='cartCount center'>99</span>
          </div>
        </div>
      </div>
      {isCartActive && <SideCart onClose={() => setIscartActive(false)} />}
    </div>
  )
}

export default NavBar