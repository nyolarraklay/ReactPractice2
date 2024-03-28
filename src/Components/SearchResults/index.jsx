import { Link } from 'react-router-dom'

const SearchResultsList = ({results, clearInput }) => {

const handleItemClick = () => {
    clearInput(); // Clear input when item is clicked   
}
  return (
    <div className='search-results-container'>
        {results.map((result) => (
            <Link to={`/product/${result.id}`} onClick={handleItemClick} key={result.id}>
            <div className='search-results'>
            <h3>{result.title}</h3>
            <p>{result.price}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default SearchResultsList