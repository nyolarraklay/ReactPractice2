import Nav from "../Navigation";
import ModalCart from "../ModalCart";

function Header({ isOpen, toggleSidebar }) {
  return (
    <header>
      <Nav isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <ModalCart />
    </header>
  );
}

export default Header;
