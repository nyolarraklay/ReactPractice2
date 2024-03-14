import useProductStore from "../Store"
import { Link } from "react-router-dom";


function Cart() {
  const { handleToggleModal } = useProductStore();
  const { cart, deleteProductFromCart, getCartTotal, clearCart } = useProductStore();
  function handleDeleteItem(id) {
    deleteProductFromCart(id);
  }
  


  return (
    <div className='cartContainer'>    
      {cart.map(({id, title, quantity, price, image}) => (
        <div key={id}>
          <div className="cartProducts">
          <img src={image.url} alt={title} className="thumbnail" />
          <div className="cartProductDetails">
          <div>
            {title}: {quantity}
          </div>
          
         <div>
          {price}
         </div>
          <button onClick={() => handleDeleteItem(id)}>Remove</button>
         </div>
         </div>
          </div>
          
      ))}
        
        {cart.length < 1 ? <p>Cart is empty</p> : <div>
        <p>Cart total: ${getCartTotal().toFixed(2)}</p> <div className="cartButtons">
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        <button className="checkout" onClick={handleToggleModal}><Link to={'/contacts'}>Checkout</Link></button>
        <button className="continue-shopping" onClick={handleToggleModal}>Continue Shopping</button>
        </div>
</div>
}
    </div>
  )

  }
export default Cart