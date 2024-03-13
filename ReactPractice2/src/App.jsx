import Layout from './Components/LayOut'
import About from './Components/About'
import Contacts from './Components/Contacts'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Home/index.jsx'
import ProductIndividual from './Components/Product/index.jsx'




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
          <Route index element={<Products />} />
          <Route path="product/:id" element={<ProductIndividual />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>

      </Routes>


    </div>

  )
}

export default App
