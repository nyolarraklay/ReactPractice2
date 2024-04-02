import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout({ isOpen, toggleSidebar }) {
  return (
    <>
      <div className="flex ">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow ml-0 mt-10 sm:duration-300 ${isOpen ? "sm:ml-76" : "sm:ml-27"}`}>
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
