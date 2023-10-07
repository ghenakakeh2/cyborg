import './GammingLabriry.css'
import {SectionHeader,SectionWrapper,SectionLibraryCard} from '../../componenet/index';
import GammingLabriryData from '../../Data/GammingLibraryData';

const GammingLabriry = () => {

    const cards= GammingLabriryData.map((card) => {
        return <SectionLibraryCard key={card.id} img={card.img} title={card.title} category={card.category} data_aded={card.data_aded} hours_played={card.hours_played} download={card.download}/>
      }
      )

  return (
    <>
       
    <SectionWrapper>
           <SectionHeader title='Gammin Library red' />
    

    <div className='Gamming-library-cards'>

     {cards}

    </div>

    </SectionWrapper>
 
</>
  )
}

export default GammingLabriry
