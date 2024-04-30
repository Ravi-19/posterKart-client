import Hero from '../../components/hero/Hero'
import './Home.scss' ; 
import Catagory from './../../components/catagory/Catagory';
import Product from './../../components/product/Product';


function Home() {
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
        <div className="collectionContent">
          <Catagory/>
          <Catagory/>
          <Catagory/>
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
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </section>
      
    </div>
  )
}

export default Home