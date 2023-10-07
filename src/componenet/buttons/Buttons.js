import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <div className='button primarybutton'>
       {props.children} 
    </div>
  )
}
const SecondryButton = (props) => {
    return (
      <div className='button secondrybutton'>
       {props.children}
        
      </div>
    )
  }

export default PrimaryButton
export {SecondryButton}

