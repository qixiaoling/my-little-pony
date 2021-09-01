import React, {useContext} from "react";
import {ProductContext} from "../context/productContext";
import Product from "../Component/Product";
import styled from "styled-components";


function ProductList() {

    const {products} = useContext(ProductContext);
    console.log(products)
    return (
        <>
            <ProductListContainer>
                {products.map(product=>{
                    return(
                        <Product key={product.id} product={product}/>
                    )
                })}
            </ProductListContainer>

        </>

    )
}
export default ProductList

const ProductListContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 2em 1em;
  
`