import { Link } from 'react-router-dom'
import useProductStore from '../Store'
import Product from './productLists'
import { useEffect, useState } from 'react'
import Cart  from '../Cart';




function Products() {
  const { products, fetchProducts, addToCart} = useProductStore();



  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function onAddToCart(id) {
    addToCart(id);
  }

  if (products) {
    return  (
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
    );
  }
  return (
     <div>Loading...</div>
     );

}


export default Products

//Remember the 3 rules of optimization:
//make it work
//make it right
//make it fast