import './Footer.scss'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import cardImg from '../../assets/cardImg.svg' ; 

function Footer() {

  const year= new Date().getFullYear() ;
  return (
    <div className='Footer'>
      <div className="container">
        <div className="footerContent">
          <div className="footerLeft">
            <h3 className='footerTitle'>Follow us</h3>
              <ul className="socialMediaLink">
                <li className='hoverLink' > <FaSquareInstagram className='insta'/></li>
                <li className='hoverLink'><FaSquareFacebook className='facebook insta'/></li>
                <li className='hoverLink'><BsTwitterX  className='tweet insta'/></li>
                <li className='hoverLink'><MdOutlineEmail  className='mail insta'/></li>
              </ul>
          </div>
          <div className="footerRight">
            <h3 className='footerTitle hoverLink' >Company</h3>
            <div className="footerLinks hoverLink">
              <p className="contactUs hoverLink">Contact Us</p>
              <p className="privacyPolicy hoverLink">Privacy Policy</p>
              <p className="returnPolicy hoverLink">Return And Exchange policy</p>
              <p className="shippingPolicy hoverLink">Shipping Policy</p>
              <p className="termsAndCondition hoverLink">Terms And Condition</p>
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