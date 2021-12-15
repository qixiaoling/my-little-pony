import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../../context/productContext";

function CartTotals() {
    const {cartSubTotal, cartTaxAmount, cartTotal} = useContext(ProductContext);
    return(
        <CartTotalContainer>
            <div>
                <p>Subtotal: ${cartSubTotal}</p>
                <p>Tax: ${cartTaxAmount}</p>
                <p>Total: ${cartTotal}</p>
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
  align-items: flex-end;
  
`
