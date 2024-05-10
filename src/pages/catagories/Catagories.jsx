import { useEffect, useState } from 'react';
import './Catagories.scss'
import {useNavigate, useParams} from 'react-router-dom' ; 
import Product from './../../components/product/Product';

function Catagories() {
  const navigate = useNavigate() ; 
  const params = useParams() ;
  const [catagoryId , setCatagoryId] = useState() ; 


  const catagoryList = [
            {
              id:'comics',
              value:'Comics'
            } , 
            {
              id:'tv-shows' , 
              value:'TV Shows'
            } , 
            {
              id:'sports' , 
              value:'Sports'
            }
  ]

  useEffect(()=> {
    setCatagoryId(params.catagoryId)
  },[params]) ;
  
  function updateCatagory(e) {
    navigate(`catagory/${e.target.value}`) ; 

  }


  return (
    <div className='Catagories'>
        <div className="container">
          <div className="catagoriesHeader">
            <div className="catagoriesInfo">
              <h2>Explore All Print And Art Work</h2>
              <p>
                India's largest collection of wall poster for your bedroom , 
                living room , kids room , kitchen and posters & art prints
                at high quality and low price gauranteed
              </p>
            </div>
            <div className="catagoriesSortBy">
              <div className="sortByContainer">
                <h3 className="sortByText">Sort By</h3>
                <select className='selectSortBy' name="sortBy" id="sortBy">
                  <option value="relevance">Relevance</option>
                  <option value="newestFirst">Newest First</option>
                  <option value="lowToHigh">price - Low To High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="CatagoriesContent">
            <div className="filterBox">
              <div className="catagoryFilter">
              <h3>Catagory</h3>
              {catagoryList.map((item) => {
                 return <div key={item.id} className="filterRadio">
                    <input 
                      name='catagory' 
                      type='radio'
                      value={item.id}
                      onChange={updateCatagory}
                      checked={item.id === catagoryId}
                    />
                    <label htmlFor={item.id}>{item.value}</label>
                  </div>
              }) }
              </div>
            </div>
            <div className="productBox">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
    </div>
  ) 
}

export default Catagories