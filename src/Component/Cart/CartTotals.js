import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../../context/productContext";
import {Link as LinkR} from 'react-router-dom';


function CartTotals() {

    const {cart, clearCart, cartSubTotal, cartTax, cartTotal} = useContext(ProductContext);
    console.log(cart.length)

    return(

        <CartTotalContainer>
            <div>
                <LinkR to='/products'>
                    <button onClick={()=>{clearCart()}}>
                        clear cart
                    </button>
                </LinkR>
                <p>Subtotal: {cartSubTotal}</p>
                <p>Tax: {cartTax}</p>
                <p>Total: {cartTotal}</p>
                <p>{console.log(cartSubTotal)}</p>
            </div>
        </CartTotalContainer>
    )
}
export default CartTotals;

const CartTotalContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  
`
