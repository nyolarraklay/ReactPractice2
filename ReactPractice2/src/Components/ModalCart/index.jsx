import Cart  from '../Cart';
import CartIcon from '../CartIcon';
import useProductStore from '../Store';


function ModalCart() {
    const { showModal, handleToggleModal} = useProductStore();


  return (
    <div>
           {!showModal && <CartIcon onClick={handleToggleModal} />}
        {showModal && (
          <div>
           <div className="overlay"></div>
          <div className="modal">
            <div className="modalContent">
              <div className="cartTopSection">
              <button onClick={handleToggleModal} className='closeCart'>&times;</button>
              <h2>My Shopping Cart</h2>
              </div>
              <Cart />
            </div>
          </div>
          </div>
        )
        }
    </div>
  )
}

export default ModalCart