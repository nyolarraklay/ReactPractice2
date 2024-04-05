import useProductStore from "../Store";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

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
    <div>
      {cart.map(({ id, title, quantity, price, image, discountedPrice }) => (
        <div key={id}>
          <div className="grid grid-cols-2 my-2 gap-1">
            <img
              src={image.url}
              alt={title}
              className="size-32 rounded-xl object-cover "
            />
            <div className="flex flex-col justify-center">
              <div>{title}</div>
              <div>Price: ${discountedPrice ? discountedPrice : price}</div>
              <div className="flex justify-evenly items-center">
                <p className="me-2">QTY:</p>
                <div className="flex space-x-1">
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
              
                <FaRegTrashAlt className="text-xl cursor-pointer hover:text-red-500 "
                onClick={() => handleDeleteItem(id)} />
              </div>
              <div>SubTotal: ${discountedPrice ? Math.floor(discountedPrice * quantity).toLocaleString() : price * quantity}</div>
            </div>
          </div>
        </div>
      ))}

      {cart.length < 1 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          <p className="text-right font-bold my-4">
            Cart total: ${getCartTotal().toLocaleString()}
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
