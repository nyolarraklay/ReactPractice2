
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
        <div className="relative" onClick={handleItemClick}>
            <FaSearch className="h-6 w-6 absolute right-0 top-0 mt-2 mr-4"/>
            <input className="border border-gray-300 rounded-md py-2 px-4  focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type to search....."
           value={input} 
           onChange={e => handleChange(e.target.value)} />
          
</div>
    )
}


export default SearchComponent;