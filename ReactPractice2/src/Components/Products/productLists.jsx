import { useState } from 'react'
import useProductStore from '../Store'
import { Link } from 'react-router-dom'



function Product({ product: { title, description, price, id }, onAddToCart, image }) {

  
const { cart, seeMore } = useProductStore();

const [addedToCart, setAddedToCart] = useState("");


  function handleButtonClick() {
    onAddToCart(id);
    setAddedToCart("Added to cart");
  }


  return <div className="card">
    <img src={image} alt={title} className="productImage" />
    <div className="cardContent">
      <div className='linkToRedirect'>
   {seeMore ? <Link to={`/product/${id}`}>See More</Link> : <Link to={`/products/`}>Bact to products</Link>}
       </div>
  
    <h3>TITLE: {title}</h3>
    <p>Description: {description}</p>
    <p>Price: {price} kr</p>
    <button onClick={handleButtonClick}>Add to cart</button>
    {cart.length > 0 && <p>{addedToCart}</p>}
    </div>
  </div>

}

export default Product

//this component is to display the product details and add to cart button
