import './NavBar.scss' ;
import {Link} from 'react-router-dom' ;  
import { BsCart3 } from "react-icons/bs";

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="container navContiner">
        <div className="navLeft">
          <ul className='linkGroup'>
            <li className='hoverLink'>
              <Link className='navLink' to="products?catagory=comic">comics</Link>
            </li>
            <li className='hoverLink'>
            <Link className='navLink' to="products?catagory=shows">Tv Shows</Link>
            </li>
            <li className='hoverLink'>
            <Link className='navLink' to="products?catagory=sports">Sports</Link>
            </li>
          </ul>
        </div>
        <div className="navCenter">
          <Link to='/'>
              <h1 className='banner'>POSTERZ.</h1 >
          </Link></div>
        <div className="navRight">
          <div className="navCart">
            <BsCart3 className='cartIcon hoverLink' /> 
            <span className='cartCount center'>99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar