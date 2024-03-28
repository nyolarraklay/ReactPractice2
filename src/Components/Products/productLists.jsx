import styled from 'styled-components'
import useProductStore from '../Store'
import { Link } from 'react-router-dom'

const Paragraph = styled.p`
  color: ${(props)=>(props.isDiscounted > 0 ? 'red' : 'white')};
  text-decoration: ${(props)=>(props.isDiscounted > 0 ? 'line-through' : 'none')};
`;

function Product({ product: { title, description, price, id, discountedPrice }, onAddToCart, image}) {
const { seeMore, getAddedToCartValue} = useProductStore();
const addedToCart = getAddedToCartValue(id);
const discount = Math.floor((price - discountedPrice) / price * 100);

  function handleButtonClick() {
    onAddToCart(id);   
  }

  return <div className="card">
    <img src={image} alt={title} className="productImage" />
    <div className="cardContent">
    <div className='linkToRedirect'>
        
   {seeMore ? <Link to={`/product/${id}`}>See More</Link> : <Link to={`/`}>Bact to products</Link>}
       </div>
  
    <h3>TITLE: {title}</h3>
    <p>Description: {description}</p>
    <Paragraph isDiscounted={discount}>Price: {price} kr</Paragraph>
    {discount > 0 && <div><p>NOW! {discountedPrice}</p> <p>On Sale: {discount}% Off</p></div>}
    
    <button onClick={handleButtonClick}>Add to cart</button>
    {addedToCart && <p>Added to Cart</p>}   
    </div>
  </div>

}

export default Product

//this component is to display the product details and add to cart button