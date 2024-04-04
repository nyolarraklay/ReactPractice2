import SearchResultsList from "../SearchResults";
import useProductStore from "../Store";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

function Search() {
    const [results, setResults] = useState([]);
    const { products } = useProductStore();
    const [input, setInput] = useState("");
    const [showNav, setShowNav] = useState(true);
  
    const fetchData = (searchText) => {
      const results = products.filter(
        (product) =>
          searchText &&
          product &&
          product.title &&
          product.title.toLowerCase().includes(searchText)
      );
      setResults(results);
    };
  
    useEffect(() => {
      if (results.length > 0) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    }, [results]);
  
    const handleItemClick = () => {
      setInput(""); // Clear input when item is clicked
    };
  
    const handleChange = (searchText) => {
      setInput(searchText);
      fetchData(searchText);
    };
  
    function clearInput() {
      setResults([]);
      setShowNav(true);
    }
  return (
    <div className="mt-10 px-7  sm:hidden">
  <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg mt-2 w-full"
    onClick={handleItemClick}
  >
    <FaSearch/>
    <input
    className="w-full ml-2 bg-transparent focus:outline-none"
      type={"search"}
      placeholder="Type to search....."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  </div>
  <SearchResultsList results={results} clearInput={clearInput} />

   </div>
  )

   
  
}

export default Search