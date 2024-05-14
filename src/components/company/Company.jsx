import React from 'react'
import './Company.scss'
import { useParams } from 'react-router-dom'

function Company() {
    const params = useParams() ; 
    const data = params.data ; 

    if(data === 'contact-us'){
        return (
            <div className='ContactUs'>
                contact us
            </div>
        )
    }
    if(data === 'privacy-policy'){
        return (
            <div className='PrivacyPolicy'>
                Privacy Policy
            </div>
        )
    }

    if(data === 'return-policy'){
        return (
            <div className='returnPolicy'>
               Return And Exchange policy
            </div>
        )
    }

    if(data === 'shipping-policy'){
        return (
            <div className='ShippingPolicy'>
               Shipping Policy
            </div>
        )
    }

  return (
    <div className='TermsCondition'>Terms And Condition</div>
  )
}

export default Company