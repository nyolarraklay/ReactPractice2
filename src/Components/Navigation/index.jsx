
import { NavLink } from "react-router-dom"



function Nav() {
 

  return (
      <div className="col-span-1 flex flex-col spacing-y-4">
         <nav id="navbar">
         <h1 className="text-4xl">Noroff Online Shop</h1>

         <div className="flex flex-col text-xl">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contact</NavLink>
         </div>
    
  
    </nav>

 
      </div>
     
   
   

  )
}

export default Nav
