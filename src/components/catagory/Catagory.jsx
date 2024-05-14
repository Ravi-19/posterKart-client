import { useNavigate } from 'react-router-dom'
import './Catagory.scss'

function Catagory({catagory}) {
  const navigate = useNavigate()  ; 
  function catagoryClickHandler() {
    navigate(`catagory/${catagory?.attributes?.key}`)  ; 
  }
  return (
    <div 
      onClick={catagoryClickHandler} 
      className='Catagory' 
      style={{backgroundImage: `url(${catagory?.attributes?.image?.data?.attributes?.url})`}}>
      <div className="catagoryContent center">
        <h2 className='catagoryHeading'>{catagory?.attributes?.title}</h2>
      </div>
    </div>
  )
}

export default Catagory