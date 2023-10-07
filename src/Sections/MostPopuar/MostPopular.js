import './MostPopuar.css';
import {Cart,SectionHeader,SectionWrapper} from '../../componenet/index';
import MostPopularData from '../../Data/MostpopularData'







const MostPopular = () => {

  const cards= MostPopularData.map((card) => {
    return <Cart key={card.id}img={card.img} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
  }
  )
  return (
    <>
       
        <SectionWrapper>
               <SectionHeader title='Most Popular' />
        

        <div className='most-Popular-itemes'>
          {cards}
          

        </div>

        </SectionWrapper>
     
    </>
  )
}

export default MostPopular
