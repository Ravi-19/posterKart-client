import { useEffect, useState } from 'react';
import './Catagories.scss'
import { useNavigate, useParams} from 'react-router-dom' ; 
import Product from '../../components/product/Product';
import { useSelector } from 'react-redux';
import { axiosClient } from '../../utils/axiosClient';
import Loader from './../../components/loader/Loader';

function Catagories() {
  const navigate = useNavigate() ; 
  const params = useParams() ;
  const [catagoryId , setCatagoryId] = useState([]) ;
  const [product , setProduct] = useState([]) ;  
  const catagoryList = useSelector(state => state.catagoryReducer.catagories) ; 

  const sortOptions =[ {
    value :"price - Low To High",
    sort:"price"
  },
  {
    value :"Newest First",
    sort:"createdAt"
  }] ; 

  const [sortBy , setSortBy] = useState(sortOptions[0].sort) ; 

  async function fetchProductData () {
    let  productResponse  = null ; 
    if(params.catagoryId) {
      productResponse  = await axiosClient.get(`/products?filters[catagory][key][$eq]=${params.catagoryId}&populate=image&sort=${sortBy}`) ; 
    }
    else {
      productResponse = await axiosClient.get(`/products?populate=image&sort=${sortBy}`) ; 
    }
   // console.log(productResponse) ; 
    setProduct(productResponse.data.data) ; 
  }

  function updateCatagory(e) {
    navigate(`/catagory/${e.target.value}`) ; 
  }
  
  useEffect(()=> {
    setCatagoryId(params.catagoryId)   ; 
    fetchProductData() ; 
  },[params.catagoryId , sortBy , product]) ;

  if(!product) {
    return <Loader/>
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
                <select 
                  className='selectSortBy' 
                  name="sortBy" id="sortBy"
                  onChange={(e)=> setSortBy(e.target.value)}
                >
                  {
                    sortOptions.map(item => {
                      return (<option key={item.sort} value={item.sort}>{item.value}</option>)
                    })
                  }
                </select>
              </div>
            </div>
          </div>

          <div className="CatagoriesContent">
            <div className="filterBox">
              <div className="catagoryFilter">
              <h3>Catagory</h3>
              {catagoryList?.map((item) => (
                  <div key={item?.id} className="filterRadio">
                    <input 
                      name='catagory' 
                      type='radio'
                      value={item.attributes.key}
                      onChange={updateCatagory}
                      checked={item.attributes.key === catagoryId}
                      id={item?.attributes.key}
                    />
                    <label htmlFor={item?.attributes.key}>{item?.attributes?.title}</label>
                  </div>
              )) }
              </div>
            </div>
            <div className="productBox">
                {
                product?.map((product)=> {
                  return <Product key={product?.id} product={product}/>
                })
              }
             
              {/* <Product />
              <Product /> */}
            </div>
          </div>
        </div>
    </div>
  ) 
}

export default Catagories