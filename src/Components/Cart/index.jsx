import { useEffect } from "react";
import useProductStore from "../Store"
import { Link } from "react-router-dom";


function Cart() {
  const { handleToggleModal, cart, deleteProductFromCart, getCartTotal, clearCart, addToCart, removedFromCart } = useProductStore();
 
  function handleDeleteItem(id) {
    deleteProductFromCart(id);
  }

function handleAddQuantity(id) {
  addToCart(id);
}

function handleDeleteQuantity(id) {
  removedFromCart(id);
}


  return (
    <div className='cartContainer'>    
      {cart.map(({id, title, quantity, price, image, discountedPrice}) => (
        <div key={id}>
          <div className="cartProducts">
          <img src={image.url} alt={title} className="thumbnail" />
          <div className="cartProductDetails">
          <div>
            {title}
          </div>
         <div>
          Price: ${discountedPrice ? discountedPrice : price}
         </div>
          <button onClick={() => handleDeleteItem(id)}>Remove</button>
          <div className="quantity-box">
          <button onClick={() => handleDeleteQuantity(id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => handleAddQuantity(id)}>+</button>
          </div>
         </div>
         
         </div>
          </div>
          
      ))}
        
        {cart.length < 1 ? <p>Cart is empty</p> : <div>
        <p>Cart total: ${getCartTotal().toFixed(2)}</p> <div className="cartButtons">
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        <button className="checkout" onClick={handleToggleModal}><Link to={'/checkout'}>Checkout</Link></button>
        <button className="continue-shopping" onClick={handleToggleModal}> <Link to={'/'}> Continue Shopping </Link></button>
        </div>
</div>
}
    </div>
  )

  }
export default Cart