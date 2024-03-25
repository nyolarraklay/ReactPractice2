
import { useState } from "react";
import useProductStore from "../Store";
import { FaSearch } from "react-icons/fa";


const SearchComponent = ({setResults}) =>{
const {products} = useProductStore();
    const [input, setInput] = useState('');

    const fetchData= (searchText) => { 
    const results = products.filter(product => searchText && product && product.title && product.title.toLowerCase().includes(searchText));
    setResults(results);
  };
  
  const handleItemClick = () => {
    setInput(''); // Clear input when item is clicked
};


  const handleChange = (searchText) => {
    setInput(searchText);
fetchData(searchText);
  };

    return (
        <div className="input-wrapper" onClick={handleItemClick}>
            <FaSearch className="search-icon"/>
            <input className="search-input"
            placeholder="Type to search....."
           value={input} 
           onChange={e => handleChange(e.target.value)} />
          
</div>
    )
}


export default SearchComponent;