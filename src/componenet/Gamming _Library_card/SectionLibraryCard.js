import './SectionLibraryCard.css'
import { SecondryButton } from '../../componenet/index'

const SectionLibraryCard = (props) => {
  return (
    <div className='gamming_Library_card '>

      <ul>
        <li><img src={props.img}/></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Data Aded</h4><span>{props. data_aded}</span></li>
        <li><h4>Hours hours_played</h4><span>{props.hours_played}</span></li>
        <li><h4>Currenty</h4><span>{props.download}</span></li>
      < SecondryButton >  
          <div className='main-button'>
          <a className='browse.html'>Download</a>
        </div> 
        </ SecondryButton>

      </ul>

    </div>
  )
}

export default SectionLibraryCard
