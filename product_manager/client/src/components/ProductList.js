import React from 'react'
import axios from 'axios';
const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.product.map((product, idx) => {
                return (
                    <div>
                        <p key={idx}><a href={"/product/" + product._id} >{product.title}</a></p><p key={idx}><a href={"/product/" + product._id} >Edit</a></p>
                        <button onClick={(e) => { deleteProduct(product._id) }}>
                            Delete
                        </button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList