import Nav from "../Navigation"
import { useEffect, useState } from 'react';

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
    <header>
      <input type="checkbox" name="" id="check1" className=" md:hidden"/>
          <Nav />
          {/* <ModalCart /> */}
    </header>
  )
}

export default Header
