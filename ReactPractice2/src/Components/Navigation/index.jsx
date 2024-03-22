
import { NavLink } from "react-router-dom"



function Nav() {
 

  return (
      <div className="navbar-icon">
         <nav id="navbar">
    
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contacts">Contact</NavLink>
    </nav>

 
      </div>
     
   
   

  )
}

export default Nav
