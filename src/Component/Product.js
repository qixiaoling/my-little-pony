import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";
import {Link as LinkR}  from 'react-router-dom';

function Product(props) {
    const { id, title, img, price, inCart} = props.product;
    const {addToCart, handleDetail} = useContext(ProductContext);
    return (

        <ProductContainer>
            <div className='product-container-top'
                onClick={()=>handleDetail(id)}
            >
                <LinkR to='/detail'>
                    <img className='product-img' src={img} alt={title}/>
                </LinkR>

                <button className='cart-btn' onClick={()=>addToCart(id)}>
                    {inCart ? "In Cart" : <i className="fas fa-cart-plus"/>}
                </button>
            </div>
            <p className='product-text'>{title}</p>
            <p className='product-text price'>${price}</p>

        </ProductContainer>
    )

}

export default Product

const ProductContainer = styled.div`

  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 
  .product-container-top {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .product-img {
    width: 100%;
    background-size: cover;
    background-position: center;
    transition: all 500ms ease-in-out;
  }
  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(100%, 100%);
    transition: all 500ms ease-in-out;
    padding: 0.2em 0.4em;
    font-size: 1.4rem;
    background: rgb(238,174,202);
    color: white;
    border-radius: 0.5rem 0 0 0;
    
    
  }
  .cart-btn:hover {
    color: rgba(148,187,233,1);
    background: white;
  }
  .product-container-top:hover .cart-btn { 
    /*When mouse hovering the bigger container, what happens to the button inside of the container*/
    transform: translate(0, 0);
  }
  .product-container-top:hover .product-img {
    transform:scale(1.2);
  }
  .product-text {
    font-family: 'Lato', sans-serif;
  }

  .price {
    font-weight: bolder;
  }

`