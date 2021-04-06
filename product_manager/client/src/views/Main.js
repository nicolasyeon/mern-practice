import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProduct([...product, res.data]);
            })
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            <h1>All Products:</h1>
            { loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;
