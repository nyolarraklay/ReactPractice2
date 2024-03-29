import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex ">
        <Header />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
