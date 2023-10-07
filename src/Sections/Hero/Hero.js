import './Hero.css'
import { PrimaryButton } from '../../componenet'

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>welcom to cyborg</h6>
        <h4 className='hero-title'><em>Browse</em> our popular games here</h4>

          <PrimaryButton >
             
             <div className='main-button'>
          <a className='browse.html'>Browse now</a>
        </div>
          </PrimaryButton>
        



      </div>
    </div>
  )
}

export default Hero
