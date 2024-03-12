import useProductStore from "../Store"
function Cart() {
  const { cart, deleteProductFromCart, getCartTotal, clearCart } = useProductStore();
  function handleDeleteItem(id) {
    deleteProductFromCart(id);
  }
  


  return (
    <div className='cartContainer'>
      <h2>My Shoppping Cart</h2>
    
      {cart.map(({id, title, quantity, price}) => (
        <div key={id}>
          <div>
            {title}: {quantity}
          </div>
         <div>
          {price}
         </div>

          </div>
          
      ))}
        
        {cart.length < 1 ? <p>Cart is empty</p> : <div>
        <p>Cart total: ${getCartTotal().toFixed(2)}</p>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
</div>
}
    </div>
  )

  }
export default Cart