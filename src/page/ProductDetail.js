import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";

function ProductDetail(){
    const {detailProduct} =useContext(ProductContext);
    return(
        <ProductDetailContainer>
            <div className='detail-left'>
                <img src={detailProduct.img} alt={detailProduct.title}/>
            </div>
            <div className='detail-right'>
                <h2>{detailProduct.title}</h2>
                <p>${detailProduct.price}</p>
                <p>{detailProduct.info}</p>
            </div>
        </ProductDetailContainer>

    )
}
export default ProductDetail

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  

`