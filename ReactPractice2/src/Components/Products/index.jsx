import useProductStore from '../Store'
import Product from './productLists'
import { useEffect, useState } from 'react'

import  API_PRODUCTS  from '../shared/apis.js';




function Products() {
  const { products, fetchProducts, addToCart, isLoading, isError} = useProductStore();

  useEffect(() => {
    fetchProducts(API_PRODUCTS);
    
  }, [fetchProducts]);


  function onAddToCart(id) {
    addToCart(id);
  }
  if(isLoading) {
    return <p>Loading...</p>
  } else if (!products || isError) {
    return <p>Something went wrong</p>
  } else {
    return (
      <div className="cardContainer" style={{ position: 'relative' }}> 
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          onAddToCart={onAddToCart}
          image={product.image.url}
        />
      ))}

    </div>
    )
  }


}


export default Products

//Remember the 3 rules of optimization:
//make it work
//make it right
//make it fast