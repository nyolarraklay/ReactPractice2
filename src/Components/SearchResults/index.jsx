import { Link } from "react-router-dom";

const SearchResultsList = ({ results, clearInput }) => {
  const handleItemClick = () => {
    clearInput(); // Clear input when item is clicked
  };
  return (
    <div className="search-results-container mt-5">
      {results.map((result) => (
        <Link
          to={`/product/${result.id}`}
          onClick={handleItemClick}
          key={result.id}
        >
          <div className="search-results flex justify-between my-2 p-1">
            <div>
              <h3>{result.title}</h3>
              <p>{result.price}</p>
            </div>
            <div>
              <img
                className="w-10 h-10 rounded-lg"
                src={result.image.url}
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;
