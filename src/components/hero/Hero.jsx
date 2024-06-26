import { useNavigate } from 'react-router-dom'
import './Hero.scss'

function Hero() {
  const navigate = useNavigate() ; 
  return (
    <div className='Hero'>
      <div className="heroContent center">
        <h2 className='heroHeading '>Exclusive Print and Art Work</h2>
        <p className="heroSubHeading">Exclusive Art prices ,  for Exclusive People</p>
        <button className='cta primaryBtn ' onClick={() => navigate('/catagory')} >Explore more </button>
      </div>
    </div>
  )
}

export default Hero