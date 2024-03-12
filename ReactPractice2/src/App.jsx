import Layout from './Components/LayOut'
import Home from './Components/Home'
import About from './Components/About'
import Contacts from './Components/Contacts'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products'
import Product from './Components/Products/productLists.jsx'
import ApiLists from './Components/APILists/index.jsx'




function App() {

  function RouteNotFound() {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    )
  }


  return (

    <div className='App'>


      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>

      </Routes>


    </div>

  )
}

export default App
