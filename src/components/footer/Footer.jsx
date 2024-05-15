import './Footer.scss'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import cardImg from '../../assets/cardImg.svg' ; 
import { Link } from 'react-router-dom';

function Footer() {

  const year= new Date().getFullYear() ;
  return (
    <div className='Footer'>
      <div className="container">
        <div className="footerContent">
          <div className="footerLeft">
            <h3 className='footerTitle'>Follow us</h3>
              <ul className="socialMediaLink">
                <li className='hoverLink' ><Link to={'https://www.instagram.com'} target={'_blank'}> <FaSquareInstagram className='insta'/></Link></li>
                <li className='hoverLink'><Link to={'https://www.facebook.com'} target={'_blank'}><FaSquareFacebook className='facebook insta'/></Link></li>
                <li className='hoverLink'><a href = {"https://twitter.com/TweetWithRavi19"} target={'_blank'}><BsTwitterX  className='tweet insta'/></a></li>
                <li className='hoverLink'><a href = {"mailto:ravishekhawatofficial@gmail.com"} target={'_blank'}><MdOutlineEmail  className='mail insta'/> </a></li>
              </ul>
          </div>
          <div className="footerRight">
            <h3 className='footerTitle hoverLink' >Company</h3>
            <div className="footerLinks hoverLink">
              <p className="contactUs hoverLink"><Link to={'/company/contact-us'}>Contact Us</Link></p>
              <p className="privacyPolicy hoverLink"><Link to={'/company/privacy-policy'}>Privacy Policy</Link></p>
              <p className="returnPolicy hoverLink"><Link to={'/company/return-policy'}>Return And Exchange policy</Link></p>
              <p className="shippingPolicy hoverLink"><Link to={'/company/shipping-policy'}>Shipping Policy</Link></p>
              <p className="termsAndCondition hoverLink"><Link to={'/company/terms-condition'}>Terms And Condition</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="subFooter"><img src={cardImg} alt="" /></div>
      <p className="copyRight">Copyright © {year} <strong>posterKart</strong>  Technologies Pvt Ltd. All Rights Reserved.</p>
    </div>
  )
}

export default Footer