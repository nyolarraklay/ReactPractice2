import Cart from "../Cart";
import useProductStore from "../Store";

function ModalCart() {
  const { showModal, handleToggleModal } = useProductStore();

  return (
    <div>
      {showModal && (
        <div>
          <div className="overlay"></div>
          <div className="modal">
            <div className="modalContent flex flex-col justify-between gap-5">
              <div>
                <button
                  onClick={handleToggleModal}
                  className="px-1 py-1 text-sm top-1 right-1 absolute"
                >
                  &times;
                </button>
              </div>
              <div>
                <h2 className="my-2 text-lg font-medium">My Shopping Cart</h2>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalCart;
