
import { NavLink } from "react-router-dom"



function Nav() {
 

  return (
      <div className="md:col-span-1 md:flex md:justify-end">
         <nav id="navbar">
         <h1 className="text-4xl">Noroff Online Shop</h1>
    
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contacts">Contact</NavLink>
    </nav>

 
      </div>
     
   
   

  )
}

export default Nav
