import './App.css'
import { Route , Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Catagories from './pages/catagories/Catagories';
import ProductDetails from './pages/productdetails/ProductDetails';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Catagories/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
