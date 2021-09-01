import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";
import {Link as LinkR } from 'react-router-dom';

function ProductDetail(){
    const {detailProduct, addToCart, openModal} = useContext(ProductContext);
    return(
        <ProductDetailContainer>
            <div className='detail-left'>
                <img src={detailProduct.img} alt={detailProduct.title}/>
            </div>
            <div className='detail-right'>
                <h2>{detailProduct.title}</h2>
                <p>${detailProduct.price}</p>
                <p>{detailProduct.info}</p>
                <LinkR to='/products'>
                    <button>
                        Back to products
                    </button>
                </LinkR>
                <button
                    disabled={detailProduct.inCart? true : false}

                    onClick={()=>{
                        addToCart(detailProduct.id);
                        openModal(detailProduct.id);
                    }}>
                    {detailProduct.inCart ? 'In Cart' : 'Add to Cart '}
                </button>
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