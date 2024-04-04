import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <div className="bg-white p-8 rounded shadow-lg max-w-md">
    <FcCheckmark className="h-16 w-16 text-green-500 mx-auto mb-4"/>
   
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">Your order has been successfully placed. Thank you for shopping with us!</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
    </div>
</div>
  )
}

export default CheckoutSuccess