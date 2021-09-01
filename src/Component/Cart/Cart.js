import React, {useContext} from 'react';
import {ProductContext} from "../../context/productContext";
import EmptyCart from "./EmptyCart";
import styled from "styled-components";
import CartItem from "./CartItem";

function Cart() {
    const {cart} = useContext(ProductContext);
    console.log(cart)
    return (
        <>
            {cart.length > 0 ?
                <CartContainer>
                    <h2>Your Cart</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTS</th>
                                <th>NAME OF PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>REMOVE</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((cartItem)=>{
                            return(
                                <tr key={cartItem.id}>
                                    <CartItem cartItem={cartItem}/>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </CartContainer>
                :
                <EmptyCart/>

            }
        </>

    )
}

export default Cart;

const CartContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  table {
    width: 100%;
    height: auto;
    text-align: center;
  }
`