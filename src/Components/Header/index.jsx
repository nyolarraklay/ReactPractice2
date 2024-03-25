import Nav from "../Navigation"
import SearchComponent from '../Search';
import { useEffect, useState } from 'react';
import SearchResultsList from '../SearchResults';
import ModalCart from "../ModalCart";






function Header() {
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
    <header className="grid md:grid-cols-3">
      <input type="checkbox" name="" id="check1" className=" md:hidden"/>
    <div className="text-4xl">
      <h1>Noroff Online Shop</h1>
      </div>
      <div className='search-box'>
        <SearchComponent setResults={setResults}/>
        <SearchResultsList results={results} clearInput={clearInput}/>
      </div>
       
          <Nav />
        
          
        
          <ModalCart />
    </header>
  )
}

export default Header
