import React, {useContext} from "react";
import {ProductContext} from "../context/productContext";
import Product from "../Component/Product";
import './ProductList.css'

function ProductList() {

    const {products} = useContext(ProductContext);
    return (
        <>
            <div className='product-list-container'>
                {products.map(product=>{
                    return(
                        <Product key={product.id} product={product}/>
                    )
                })}
            </div>
        </>
    )
}
export default ProductList
