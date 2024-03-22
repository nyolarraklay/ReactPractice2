import Cart  from '../Cart';
import { NavLink } from "react-router-dom"
import CartIcon from '../CartIcon';
import useProductStore from '../Store';
import SearchComponent from '../Search';
import { useEffect, useState } from 'react';
import SearchResultsList from '../SearchResults';



function Nav() {
  const { showModal, handleToggleModal} = useProductStore();
  const [results, setResults] = useState([]);
  const [showNav, setShowNav] = useState(true);

  function clearInput() {
    setResults ([]);
    setShowNav(true);

  }

useEffect(() => {
  if(results.length > 0) {
    setShowNav(false);
  } else {
    setShowNav(true);
  }
}, [results]);

  return (
      <div>

        <SearchComponent setResults={setResults}/>
    <SearchResultsList results={results} clearInput={clearInput}/>
      {showNav && ( 
       <div>   
    
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
      </div>
      )}
    </div>

  )
}

export default Nav
