import { IoCartOutline } from "react-icons/io5";
import useProductStore from "../Store";

const CartIcon = ({ isOpen }) => {
  const { getTotalNumbersOfItemsInCart, handleToggleModal } = useProductStore();

  return (
    <div className="cart-icon cursor-pointer" onClick={handleToggleModal}>
      <div
        className={`relative gap-4 flex items-center rounded-md sm:bg-zinc-700 my-4 sm:mt-6  ${
          !isOpen ? "px-2 w-8" : "px-4"
        } py-2`}
      >
        <IoCartOutline className=" text-lg bg-white text-black cursor-pointer  rounded-full border" />
        <h2 className={`hidden sm:block ${!isOpen && "sm:hidden"}`}> My Shopping Cart</h2>
        {getTotalNumbersOfItemsInCart() > 0 && (
          <div className={`text-white flex justify-center absolute left-8 rounded-full size-4 text-center bg-red-700 ${
            isOpen ? "top-0 left-7" : "top-0 left-4"
          }`}>
              <span
            className="text-xs font-semibold text-white text-center"  
          >
            {getTotalNumbersOfItemsInCart()}{" "}
          </span>
          </div>
        
        )}
      </div>
    </div>
  );
};
export default CartIcon;
