import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcShop, FcHome, FcAbout, FcFeedback } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import SearchResultsList from "../SearchResults";
import useProductStore from "../Store";
import { FaSearch } from "react-icons/fa";
import CartIcon from "../CartIcon";

function Nav({ isOpen, toggleSidebar }) {
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
    <div
      className={`flex flex-col h-18 w-screen sm:flex sm:relative sm:h-screen sm:p-5 sm:pt-8 ${
        isOpen ? "sm:w-64" : "sm:w-14"
      } sm:duration-300`}
    >
      <nav id="navbar" className="flex justify-between sm:items-center sm:flex-col">
        <div className="bg-black h-7 w-7 hidden sm:block absolute -right-9 top-9 rounded-full cursor-pointer">
          <FaArrowCircleLeft
          className={`hidden sm:block  text-3xl cursor-pointer ${
            !isOpen && "rotate-180"
          }`}
          onClick={toggleSidebar}
        />
        </div>
        
        <div className={`m-0 flex items-center  gap-1 ${
            !isOpen ? "px-0 w-8" : "px-4"
          } sm:py-2`}>
          <FcShop className="text-3xl" />
          <h1
            className={` font-medium origin-left text-xl sm:duration-300 ${
              !isOpen && "sm:hidden"
            }`}
          >
            Noroff Shop
          </h1>
        </div>
        <div
          className={`hidden sm:flex gap-4 items-center my-4 rounded-md bg-zinc-700 sm:mt-6 ${
            !isOpen ? "px-2 w-8" : "px-4"
          } py-2`}
          onClick={handleItemClick}
        >
          <FaSearch
            className={`text-white text-lg block cursor-pointer float-left ${
              isOpen && "sm:mr-2 sm:ml-0"
            } `}
            onClick={toggleSidebar}
          />
          <input
            className={`hidden sm:block text-base bg-transparent w-full text-white focus:outline-none ${
              !isOpen && "sm:hidden"
            }`}
            type={"search"}
            placeholder="Type to search....."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <SearchResultsList results={results} clearInput={clearInput} />

        {showNav && (
          <div className="flex flex-row sm:flex-col text-lg">
            <NavLink to="/" className="nav-link flex items-center gap-1">
              <div
                className={`flex gap-4 items-center rounded-md sm:bg-zinc-700 my-4 sm:mt-6 ${
                  !isOpen ? "px-2 w-8" : "px-4"
                } py-2`}
              >
                <FcHome className="text-lg  " />
                <h2 className={`hidden sm:block ${!isOpen && "sm:hidden"}`}>Home</h2>
              </div>
            </NavLink>
            <NavLink to="/about" className="nav-link flex items-center gap-1">
              <div
                className={`flex gap-4 items-center rounded-md sm:bg-zinc-700 my-4 sm:mt-6 ${
                  !isOpen ? "px-2 w-8" : "px-4"
                } py-2`}
              >
                <FcAbout className="text-lg  " />
                <h2 className={`hidden sm:block ${!isOpen && "sm:hidden"}`}>About</h2>
              </div>
            </NavLink>
            <NavLink
              to="/contacts"
              className="nav-link flex items-center gap-1"
            >
              <div
                className={`flex gap-4 items-center rounded-md sm:bg-zinc-700 my-4 sm:mt-6 ${
                  !isOpen ? "px-2 w-8" : "px-4"
                } py-2`}
              >
                <FcFeedback className="text-lg  " />
                <h2 className={`hidden sm:block  ${!isOpen && "sm:hidden"}`}>Contact Us</h2>
              </div>
            </NavLink>
            <CartIcon isOpen={isOpen} />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
