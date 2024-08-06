import Hero from '../../components/hero/Hero'
import './Home.scss' ; 
import Catagory from './../../components/catagory/Catagory';
import Product from './../../components/product/Product';
import { useEffect, useState } from 'react';
import {axiosClient} from './../../utils/axiosClient'
import { useSelector } from 'react-redux';
import Loader from './../../components/loader/Loader';


function Home() {
 // const [catagories  , setCatagories] = useState(null) ; 
  const [topPicks , setTopPicks] = useState(null) ; 
  const catagories = useSelector(state => state.catagoryReducer.catagories) ; 
  
  async function fetchData () {
    //const catagoryResponse  = await axiosClient.get('/catagories?populate=image') ; 
    const topPicksResponse = await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image'); 
    setTopPicks(topPicksResponse?.data?.data) ; 
    //setCatagories(catagoryResponse?.data?.data) ; 
   // console.log("catagory" , catagories) ; 
  //  console.log("products" , topPicks) ; 
  }

  useEffect( ()=>{
    fetchData()   ; 
  } ,[catagories ]) ;

  if(!catagories || !topPicks) {
    return ( <Loader/>)
  }
  
  return (
    <div className='Home'>
      <Hero/>
      <section className="collection container">
        <div className="info">
          <div className="collectionHeading">
           <h2>Shop by catagories</h2>
          </div>
          <p className="collectionSubHeading">
            Shop from the best , Our film and Tv poster collection
          </p>
        </div>
        <div className="collectionContentCatagory">
          {
            catagories?.map((catagory)=>{
             return  <Catagory key={catagory?.id} catagory={catagory}/>
            })
          }
          {/* <Catagory/>
          <Catagory/>
          <Catagory/> */}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <div className="collectionHeading">
           <h2>Our top picks</h2>
          </div>
          <p className="collectionSubHeading">
          All new design , same old details
          </p>
        </div>
        <div className="collectionContent">
         {
          topPicks?.map((product)=> {
            return <Product key={product?.id} product={product}/>
          })
         }
          {/* <Product/>
          <Product/>
          <Product/> */}
        </div>
      </section>
      
    </div>
  )
}

export default Home