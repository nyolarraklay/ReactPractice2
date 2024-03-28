import { IoCartOutline } from "react-icons/io5"
import useProductStore from '../Store'

const CartIcon = ({ onClick }) => {
    const { getTotalNumbersOfItemsInCart} = useProductStore();

    return (
      <div className="cart-icon" onClick={onClick}>
           <div className="shopping-cart-icon"> <IoCartOutline /> 
           {getTotalNumbersOfItemsInCart() > 0 && <span className="item-count">{ getTotalNumbersOfItemsInCart()} </span>}
            </div>
    {/* //avoid passing ffunctions, because once you click on the button it will create a lot of ffunctions */}
      </div>
    );
  }
  export default CartIcon;