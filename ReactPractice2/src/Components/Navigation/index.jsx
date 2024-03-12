import Cart  from '../Cart';
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import CartIcon from '../CartIcon';



function Nav() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <div>  
      <div className="navbar-icon">
         <nav id="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contacts">Contact</NavLink>
    </nav>

    {!showModal && <CartIcon onClick={handleToggleModal} />}
        {showModal && (
          <div>
           <div className="overlay"></div>
          <div className="modal">
            <div className="modalContent">
              <button onClick={() => setShowModal(false)}>Close</button>
              <Cart />
            </div>
          </div>
          </div>
        )
        }
      </div>
   
    </div>

  )
}

export default Nav
