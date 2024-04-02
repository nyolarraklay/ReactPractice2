import useProductStore from "../Store";
import { Link } from "react-router-dom";

function Cart() {
  const {
    handleToggleModal,
    cart,
    deleteProductFromCart,
    getCartTotal,
    clearCart,
    addToCart,
    removedFromCart,
  } = useProductStore();

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
    <div className="cartContainer">
      {cart.map(({ id, title, quantity, price, image, discountedPrice }) => (
        <div key={id}>
          <div className="flex justify-between my-4">
            <img
              src={image.url}
              alt={title}
              className="w-44 h-44 rounded-xl object-cover"
            />
            <div className="flex flex-col">
              <div>{title}</div>
              <div>Price: ${discountedPrice ? discountedPrice : price}</div>
              <button
                className="py-1 text-sm mb-2 "
                onClick={() => handleDeleteItem(id)}
              >
                Remove
              </button>
              <div className="flex">
                <p className="me-2">QTY:</p>
                <button
                  className="px-2 py-1 text-sm"
                  onClick={() => handleDeleteQuantity(id)}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="px-2 py-1 text-sm"
                  onClick={() => handleAddQuantity(id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {cart.length < 1 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          <p className="text-right font-bold my-4">
            Cart total: ${getCartTotal().toFixed(2)}
          </p>{" "}
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <button className="mr-4 flex" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="mr-4 flex" onClick={handleToggleModal}>
                <Link to={"/checkout"}>Checkout</Link>
              </button>
            </div>

            <button className="mt-4 flex" onClick={handleToggleModal}>
              {" "}
              <Link to={"/"}> Continue Shopping </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
