
import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router-dom";




  
function Layout ()  {
  return (
    <>
    <div className="grid grid-cols-3">
    <Header />
        <Outlet />
    </div>
    <div>
    <Footer />
    </div>
   
       
    </>
        
    
  );
}


export default Layout
