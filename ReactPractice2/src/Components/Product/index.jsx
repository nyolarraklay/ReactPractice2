import useProductStore from '../Store'
import { useEffect, useState } from 'react'
import  API_PRODUCTS  from '../shared/apis.js';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Product from '../Products/productLists.jsx';







function ProductIndividual() {
  const { addToCart, isLoading, isError, backToProducts} = useProductStore();
  let { id } = useParams();
  const API_PRODUCT = API_PRODUCTS + id;
  const [data, setData] = useState(null);
  
  
  useEffect(() => {
    async function getData(url) {
        try {
     
  
          const response = await fetch(url);
          const json = await response.json();
  
          setData(json.data);
          backToProducts()
        } catch (error) {
          console.log(error);
        } 
      }
  
      getData(API_PRODUCT);
    }, [id]);

  function onAddToCart(id) {
    addToCart(id);
  }
  if(isLoading) {
    return <p>Loading...</p>
  } else if (!data || isError) {
    return <p>Something went wrong</p>
  } else {
    return (
      <div className="cardContainerForProduct"> 

        <Product
          product={data}
          key={data.id}
          onAddToCart={onAddToCart}
            image={data.image.url}
          

        /> 
    </div>
    )
  }


}


export default ProductIndividual

//Remember the 3 rules of optimization:
//make it work
//make it right
//make it fast