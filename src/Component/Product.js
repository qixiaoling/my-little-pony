import React from 'react';
import './Product.css'

function Product(props) {
   const{title, info, img, price} = props.product;
    return (

        <div className='product-container'>
            <img src={img} alt={title}/>
            <p>{info}</p>
            <p>${price}</p>
        </div>
    )

}
export default Product
