import './Navitem.css'
import React from 'react'

const Navitem = (props) => {
  return (
    <li className='nav-item'>
      {props.children}
    </li>
  )
}
const Navitemdropdown = (props) => {
    return (
      <li className='nav-item dropdown'>
        {props.children}
      </li>
    )
  }

export default Navitem
export {Navitemdropdown}
