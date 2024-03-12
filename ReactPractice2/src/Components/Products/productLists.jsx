import { useState } from 'react'
import useProductStore from '../Store'

function Product({ product: { title, description, price, id }, onAddToCart, image }) {
  const { cart } = useProductStore();

const [addedToCart, setAddedToCart] = useState("");


  function handleButtonClick() {
    onAddToCart(id);
    setAddedToCart("Added to cart");
  }


  return <div className="card">
    <img src={image} alt={title} className="productImage" />
    <div className="cardContent">
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
