import'./header.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Navitem,{Navitemdropdown} from '../../componenet/Navitem/Navitem'

const Header=() => {
  return(
    <div className="navbar navbar-expand-md navbar-dark text-white cyborg-navbar">
     <div className='container '>
      <a href='/'> <img src={logo}></img></a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
     </button>
 

  <div className="collapse navbar-collapse" id="mainmenu">
    <ul className="navbar-nav  ms-auto">
      <Navitem> 
        <Link to="/" className="nav-link">Home</Link>
      

         </Navitem>
     
      <Navitem>
        <a className="nav-link" href="#">Browse</a>
      </Navitem>

      <Navitemdropdown>
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle='dropdown'>Detailes</a>
        <ul className='dropdown-menu'>
          <li><a href='#' className='dropdown-item'>Fortinti</a></li>
          <li><a href='#' className='dropdown-item'>call of duty </a></li>

        </ul>
      </Navitemdropdown>

      <Navitem>
        <Link to="/profie" className="nav-link ">Profile</Link>
      
      </Navitem>
      
      <Navitem>
        <a className="nav-link " href="#">Streams</a>
      </Navitem>
    </ul>
   
  </div>
     </div>
</div>
  )
}
export default Header;