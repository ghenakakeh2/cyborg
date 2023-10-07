import './Cart.css'
import {FaStar,FaDownload} from 'react-icons/fa'

const Cart = (props) => {
  return (
    <div className='most-Popular-item'>
    <div className='cart-wrapper'>
      <img className='most-Popular-imge' src={props.img} />
      <div className='most-Popular-item-content'>
        <h4 className='most-Popular-item-title'>
          {props.title}<br/> 
          <span>{props.category}</span>
        </h4>
        <ul>
        <li><span style={{'color':'var(--color-icons)'}}> <FaStar /> </span><span>{props.rate}</span></li>
        <li> <span style={{"color":"var(--color-primary)"}}><FaDownload /></span> <span>{props.download}</span></li>

        </ul>
      </div>


    </div>

  </div>
  )
}

export default Cart
