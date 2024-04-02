import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout({ isOpen, toggleSidebar }) {
  return (
    <>
      <div className="flex ">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow duration-300 ${isOpen ? "ml-76" : "ml-27"}`}>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
