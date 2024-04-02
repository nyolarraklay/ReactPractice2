import { IoCartOutline } from "react-icons/io5";
import useProductStore from "../Store";

const CartIcon = ({ isOpen }) => {
  const { getTotalNumbersOfItemsInCart, handleToggleModal } = useProductStore();

  return (
    <div className="cart-icon" onClick={handleToggleModal}>
      <div
        className={`relative gap-4 flex items-center rounded-md bg-zinc-700 mt-6  ${
          !isOpen ? "px-2 w-8" : "px-4"
        } py-2`}
      >
        <IoCartOutline className=" text-lg bg-white text-black cursor-pointer  rounded-full border" />
        <h2 className={`${!isOpen && "hidden"}`}> My Shopping Cart</h2>
        {getTotalNumbersOfItemsInCart() > 0 && (
          <span
            className={`text-orange-400 absolute left-8 ${
              isOpen ? "top-8 " : "top-4 left-6"
            }`}
          >
            {getTotalNumbersOfItemsInCart()}{" "}
          </span>
        )}
      </div>
    </div>
  );
};
export default CartIcon;
