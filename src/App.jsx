import './App.css'
import { Route , Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Catagories from './pages/catagories/Catagories';
import ProductDetails from './pages/productdetails/ProductDetails';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux' ; 
import { catagoryData } from './redux/slices/catagorySlice';
import Payments from './components/payments/Payments';
import Company from './components/company/Company';
function App() {
  const dispatch  = useDispatch() ; 
  useEffect(()=> {
    dispatch(catagoryData()) ; 
  } ,[]) ; 
  return (
    <div className='App'>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/catagory/:catagoryId?" element={<Catagories/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/>
          <Route path="/payments/:status" element={<Payments />} />
          <Route path="/company/:data" element={<Company/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
