import useProductStore from "../Store/index.js";
import Product from "../Products/productLists.jsx";
import { useEffect } from "react";
import API_PRODUCTS from "../shared/apis.js";
import CartIcon from "../CartIcon/index.jsx";

function Products() {
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
      <div className="col-span-2 flex space-y-10">
        <dive className="bg-cyan-700 flex h-10 fixed w-full items-center">
          <CartIcon />
        </dive>
        <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 4xl:grid-cols-5 ">
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
