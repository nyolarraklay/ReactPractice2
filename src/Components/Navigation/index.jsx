import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcShop, FcHome, FcAbout, FcFeedback } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import SearchResultsList from "../SearchResults";
import useProductStore from "../Store";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(true);
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
      className={`relative h-screen p-5 pt-8 ${
        open ? "w-64" : "w-14"
      } duration-300`}
    >
      <nav id="navbar">
        <FaArrowCircleLeft
          className={`absolute -right-9 top-9 text-3xl cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <FcShop className="text-5xl cursor-pointer block float-left mr-2" />
          <h1
            className={`font-medium origin-left text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Noroff Shop
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-zinc-700 mt-6 ${
            !open ? "px-2 w-8" : "px-4"
          } py-2`}
          onClick={handleItemClick}
        >
          <FaSearch
            className={`text-white text-lg block cursor-pointer float-left ${
              open && "mr-2 ml-0"
            } `}
            onClick={() => setOpen(!open)}
          />
          <input
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
            type={"search"}
            placeholder="Type to search....."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <SearchResultsList results={results} clearInput={clearInput} />

        {showNav && (
          <div className="flex flex-col text-xl">
            <NavLink to="/" className="nav-link flex items-center gap-1">
              <div
                className={`flex items-center rounded-md bg-zinc-700 mt-6 ${
                  !open ? "px-2 w-8" : "px-4"
                } py-2`}
              >
                <FcHome className="text-lg  " />
                <h2 className={`${!open && "hidden"}`}>Home</h2>
              </div>
            </NavLink>
            <NavLink to="/about" className="nav-link flex items-center gap-1">
              <div
                className={`flex items-center rounded-md bg-zinc-700 mt-6 ${
                  !open ? "px-2 w-8" : "px-4"
                } py-2`}
              >
                <FcAbout className="text-lg  " />
                <h2 className={`${!open && "hidden"}`}>About</h2>
              </div>
            </NavLink>
            <NavLink
              to="/contacts"
              className="nav-link flex items-center gap-1"
            >
              <div
                className={`flex items-center rounded-md bg-zinc-700 mt-6 ${
                  !open ? "px-2 w-8" : "px-4"
                } py-2`}
              >
                <FcFeedback className="text-lg  " />
                <h2 className={`${!open && "hidden"}`}>Contact Us</h2>
              </div>
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
