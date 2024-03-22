import Cart  from '../Cart';
import { NavLink } from "react-router-dom"
import CartIcon from '../CartIcon';
import useProductStore from '../Store';


function Nav() {
  const { showModal, handleToggleModal} = useProductStore();

  return (
      <div className="navbar-icon">
         <nav id="navbar">
    
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contacts">Contact</NavLink>
    </nav>

    {!showModal && <CartIcon onClick={handleToggleModal} />}
        {showModal && (
          <div>
           <div className="overlay"></div>
          <div className="modal">
            <div className="modalContent">
              <div className="cartTopSection">
              <button onClick={handleToggleModal} className='closeCart'>&times;</button>
              <h2>My Shopping Cart</h2>
              </div>
              <Cart />
            </div>
          </div>
          </div>
        )
        }
      </div>
     
   
   

  )
}

export default Nav
