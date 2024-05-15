import React from 'react'
import './Company.scss'
import { useParams } from 'react-router-dom'

function Company() {
    const params = useParams() ; 
    const data = params.data ; 

    if(data === 'contact-us'){
        return (
            <div className='ContactUs container'>
                <div className="contactusTop">
                    <h3>PosterKart Help Center | 24x7 Customer Care Support</h3>
                    <p>
                    The PosterKart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The PosterKart Help Centre also lists out more information that you may need regarding PosterKart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the PosterKart Help Centre number or even access PosterKart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on {new Date().toDateString()}
                    </p>
                </div>
                <div className="contactusDetails">
                    <div className="firstDetail">
                        <h4>PosterKart Help Centre: Get All Shopping Solutions Here </h4>
                        <p>
                        Once you place your order on any online shopping store, the next obvious thing to do is wait for your product to arrive. This wait can be quite anxiety-ridden if you do not get updates about your order or do not receive support post-delivery of your order. However, with the PosterKart Help Centre, your wait becomes exciting, and your shopping experience becomes joyful, thanks to all the support it provides related to your order. With websites, like PosterKart, the entire shopping experience has gone through a major change. Now, you can conveniently shop any time, from anywhere, and anything that you want. These websites are one-stop destinations for all your needs and requirements. From skincare products to home appliances and groceries to baby care essentials, everything is just a few clicks away. These websites provide you convenience, at the same time, a bitter experience can make online shopping a nightmare for many. To ensure that your shopping experience is delightful, the PosterKart Help centre support offers every assistance that you need. From reporting specific delivered product-related issues to letting you manage your orders, the PosterKart Helpcentre has solutions to all your worries related to your orders. Furthermore, if you do not find a solution to your queries here, then you can use the PosterKart Help Centre number to get your issues solved. Keep reading to know more about PosterKart Help Centre and what all assistance you get here: 
                        </p>
                    </div>
                    <div className="secondPara">
                        <h4>24x7 Customer Care Support</h4>
                        <p>
                        You can 24x7 Customer Care Support on the PosterKart Help Centre. Any query or issue that you may possibly have while shopping on PosterKart is taken care here. This page is easy to navigate, and you can get support almost immediately. Once you log onto your PosterKart account, this page shows you your recent orders and let you report any issue. By clicking on the specific order, you can raise your query. It also has a chat option to ensure that your queries and issues are taken care of. Similarly, there are other options on this page that are created to assist you and to make your shopping experience hassle-free. You can get support any time and get a satisfactory solution to your queries and issues within minutes. 
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }

    if(data === 'privacy-policy'){
        return (
            <div className='PrivacyPolicy container'>
                <div className="privacyPolicytop">
                    <h3>PRIVACY POLICY</h3>
                    <p>
                    We value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy Policy describes how PosterKart Internet Private Limited and its affiliates (collectively “PosterKart, we, our, us”) collect, use, share or otherwise process your personal data through PosterKart website www.PosterKart.com, its mobile application, and m-site (hereinafter referred to as the “Platform”).
                    While you can browse sections of the Platform without the need of sharing any information with us, however, please note we do not offer any product or service under this Platform outside India and your personal data will primarily be stored and processed in India. By visiting this Platform, providing your information or availing out product/service, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.
                    </p>
                </div>
                <div className="privacyPolicyDown">
                    <h4>Collection of Your Information</h4>
                    <p>
                    When you use our Platform, we collect and store your information which is provided by you from time to time. Once you give us your personal data, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide data by choosing not to use a particular service, product or feature on the Platform. 
                    </p>
                    <p>
                    We may track your buying behavior, preferences, and other information that you choose to provide on our Platform. We use this information to do internal research on our users' demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to (whether this URL is on our Platform or not), your computer browser information, and your IP address.
                    </p>
                </div>
            </div>
        )
    }

    if(data === 'return-policy'){
        return (
            <div className='ContactUs container'>
                <div className="contactusTop">
                    <h3>PosterKart Help Center | 24x7 Customer Care Support</h3>
                    <p>
                    The PosterKart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The PosterKart Help Centre also lists out more information that you may need regarding PosterKart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the PosterKart Help Centre number or even access PosterKart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on {new Date().toDateString()}
                    </p>
                </div>
                <div className="contactusDetails">
                    <div className="firstDetail">
                        <h4>PosterKart Help Centre: Get All Shopping Solutions Here </h4>
                        <p>
                        Once you place your order on any online shopping store, the next obvious thing to do is wait for your product to arrive. This wait can be quite anxiety-ridden if you do not get updates about your order or do not receive support post-delivery of your order. However, with the PosterKart Help Centre, your wait becomes exciting, and your shopping experience becomes joyful, thanks to all the support it provides related to your order. With websites, like PosterKart, the entire shopping experience has gone through a major change. Now, you can conveniently shop any time, from anywhere, and anything that you want. These websites are one-stop destinations for all your needs and requirements. From skincare products to home appliances and groceries to baby care essentials, everything is just a few clicks away. These websites provide you convenience, at the same time, a bitter experience can make online shopping a nightmare for many. To ensure that your shopping experience is delightful, the PosterKart Help centre support offers every assistance that you need. From reporting specific delivered product-related issues to letting you manage your orders, the PosterKart Helpcentre has solutions to all your worries related to your orders. Furthermore, if you do not find a solution to your queries here, then you can use the PosterKart Help Centre number to get your issues solved. Keep reading to know more about PosterKart Help Centre and what all assistance you get here: 
                        </p>
                    </div>
                    <div className="secondPara">
                        <h4>24x7 Customer Care Support</h4>
                        <p>
                        You can 24x7 Customer Care Support on the PosterKart Help Centre. Any query or issue that you may possibly have while shopping on PosterKart is taken care here. This page is easy to navigate, and you can get support almost immediately. Once you log onto your PosterKart account, this page shows you your recent orders and let you report any issue. By clicking on the specific order, you can raise your query. It also has a chat option to ensure that your queries and issues are taken care of. Similarly, there are other options on this page that are created to assist you and to make your shopping experience hassle-free. You can get support any time and get a satisfactory solution to your queries and issues within minutes. 
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }

    if(data === 'shipping-policy'){
        return (
            <div className='ShippingPolicy container'><h2 className="shipping">Shipping</h2>
            <p><strong>What are the delivery charges?</strong></p>
            <p>Delivery charge varies with each Seller.</p>
            <p>Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs. Please check your order summary to understand the delivery charges for individual products.</p>
            <p> For Products listed as PosterKart Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.</p>
            <p><strong>Why does the delivery date not correspond to the delivery timeline of X-Y business days?</strong></p>
            <p>It is possible that the Seller or our courier partners have a holiday between the day your placed your order and the date of delivery, which is based on the timelines shown on the product page. In this case, we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is factored in to the delivery dates.</p>
            <p><strong>What is the estimated delivery time?</strong></p>
            <p>Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.</p>
            <p>Estimated delivery time depends on the following factors:</p>
            <ul>
            <li>The Seller offering the product</li>
            <li>Product's availability with the Seller </li>
            <li>The destination to which you want the order shipped to and location of the Seller.</li>
            </ul>
            <p><strong>Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on PosterKart?</strong></p>
            <p>There are NO hidden charges when you make a purchase on PosterKart. List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.</p>
            <p>Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.</p>
            <p><strong>Why does the estimated delivery time vary for each seller?</strong></p>
            <p>You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner's time-to-deliver in your location.</p>
            <p>Please enter your default pin code on the product page (you don't have to enter it every single time) to know more accurate delivery times on the product page itself.</p>
            <p><strong>Seller does not/cannot ship to my area. Why?</strong></p>
            <p>Please enter your pincode on the product page (you don't have to enter it every single time) to know whether the product can be delivered to your location.</p>
            <p>If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.</p>
            <p>Whether your location can be serviced or not depends on</p>
            <ul>
            <li>Whether the Seller ships to your location</li>
            <li>Legal restrictions, if any, in shipping particular products to your location</li>
            <li>The availability of reliable courier partners in your location</li>
            </ul>
            <p>At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.</p>
            <p><strong>Why is the CoD option not offered in my location?</strong></p>
            <p>Availability of CoD depends on the ability of our courier partner servicing your location to accept cash as payment at the time of delivery.</p>
            <p>Our courier partners have limits on the cash amount payable on delivery depending on the destination and your order value might have exceeded this limit. Please enter your pin code on the product page to check if CoD is available in your location.</p>
            <p><strong>I need to return an item, how do I arrange for a pick-up?</strong></p>
            <p>Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.</p>
            <p>Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.</p>
            <p><strong>I did not receive my order but got a delivery confirmation SMS/Email.</strong></p>
            <p>In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of delivery confirmation for the seller to investigate.</p>
            <p><strong>What do the different tags like "In Stock", "Available" mean?</strong></p>
            <p><strong>'In Stock'</strong></p>
            <p>For items listed as "In Stock", Sellers will mention the delivery time based on your location pincode (usually 2-3 business days, 4-5 business days or 4-6 business days in areas where standard courier service is available). For other areas, orders will be sent by Registered Post through the Indian Postal Service which may take 1-2 weeks depending on the location.</p>
            <p><strong>'Available'</strong></p>
            <p>The Seller might not have the item in stock but can procure it when an order is placed for the item. The delivery time will depend on the estimated procurement time and the estimated shipping time to your location.</p>
            <p><strong>'Preorder' or 'Forthcoming'</strong></p>
            <p>Such items are expected to be released soon and can be pre-booked for you. The item will be shipped to you on the day of it's official release launch and will reach you in 2 to 6 business days. The Preorder duration varies from item to item. Once known, release time and date is mentioned. (Eg. 5th May, August 3rd week)</p>
            <p><strong>'Out of Stock'</strong></p>
            <p>Currently, the item is not available for sale. Use the 'Notify Me' feature to know once it is available for purchase.</p>
            <p><strong>'Imported'</strong></p>
            <p>Sometimes, items have to be sourced by Sellers from outside India. These items are mentioned as 'Imported' on the product page and can take at least 10 days or more to be delivered to you.</p>
            <p><strong>'Back In Stock Soon'</strong></p>
            <p>The item is popular and is sold out. You can however 'book' an order for the product and it will be shipped according to the timelines mentioned by the Seller.</p>
            <p><strong>'Temporarily Unavailable'</strong></p>
            <p>The product is currently out of stock and is not available for purchase. The product could to be in stock soon. Use the 'Notify Me' feature to know when it is available for purchase.</p>
            <p><strong>'Permanently Discontinued'</strong></p>
            <p>This product is no longer available because it is obsolete and/or its production has been discontinued.</p>
            <p><strong>'Out of Print'</strong></p>
            <p>This product is not available because it is no longer being published and has been permanently discontinued.</p>
            <h2 id="-does-PosterKart-deliver-internationally-"><strong>Does PosterKart deliver internationally?</strong></h2>
            <p>As of now, PosterKart doesn't deliver items internationally.</p>
            <p>You will be able to make your purchases on our site from anywhere in the world with credit/debit cards issued in India and 21 other countries, but please ensure the delivery address is in India.</p>
        </div>
        )
    }
    return (
            <div className='TermsCondition container'>
                <h3>
                    PosterKart Terms of Use
                </h3>
                <p>
                This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.
                </p>
                <p>
                This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name [www.PosterKart.com] (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”)
                </p>
                <p>
                The Platform is owned by PosterKart Internet Private Limited, a company incorporated under the Companies Act, 1956 with its registered office at jaipur , its branch office at 33/c, 12th Main, 4th Block, Khatipura, jaipur-302012, Jaipur, India (hereinafter referred to as "PosterKart").
                </p>
                <p>
                Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with PosterKart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with PosterKart.
                </p>
            </div>
          )
 
}

export default Company