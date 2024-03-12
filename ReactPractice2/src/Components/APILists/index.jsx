import useProductStore from '../Store'
import { useEffect } from 'react';
import Product from '../Products/productLists'


function ApiLists() {
    const { products, fetchProducts, addToCart } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    function onAddToCart(id) {
        addToCart(id);
    }

    if (products) {
        return products.map((product) => <Product product={product} key={product.id} onAddToCart={onAddToCart} title={product.title} />)

    }
    return (
        <div>
            Products
        </div>
    )
}


export default ApiLists