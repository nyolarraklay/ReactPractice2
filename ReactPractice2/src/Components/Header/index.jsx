import Nav from "../Navigation"
import SearchComponent from '../Search';
import { useEffect, useState } from 'react';
import SearchResultsList from '../SearchResults';






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
    <header>
      <input type="checkbox" name="" id="check1" />
    <div className="logo">
      <h1>Noroff Online SHop</h1>
      </div>
      <div className='search-box'>
        <SearchComponent setResults={setResults}/>
        <SearchResultsList results={results} clearInput={clearInput}/>
      </div>
        {showNav && ( 
          <Nav />
          )
        }
    </header>
  )
}

export default Header
