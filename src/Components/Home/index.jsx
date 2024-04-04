import useProductStore from "../Store/index.js";
import Product from "../Products/productLists.jsx";
import { useEffect } from "react";
import API_PRODUCTS from "../shared/apis.js";
import CartIcon from "../CartIcon/index.jsx";
import Search from "../Search/index.jsx";

function Products({ isOpen }) {
  const { products, fetchProducts, addToCart, isLoading, isError } =
    useProductStore();

  useEffect(() => {
    fetchProducts(API_PRODUCTS);
  }, [fetchProducts]);

  function onAddToCart(id) {
    addToCart(id);
  }
  if (isLoading) {
    return (
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  } else if (!products || isError) {
    return <p>Something went wrong</p>;
  } else {
    return (
      <div className="block">
          <Search />
          <div className="cardContainer">
     
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            onAddToCart={onAddToCart}
            image={product.image.url}
          />
        ))}
      </div>
      </div>
      
    );
  }
}

export default Products;

//Remember the 3 rules of optimization:   relative
//make it work
//make it right
//make it fast
