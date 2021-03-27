import React from 'react'
// import axios from 'axios';
const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}><a href={"/product/" + product._id} >{product.title}</a></p>
            })}
        </div>
    )
}
export default ProductList