import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";

function Modal() {
    const {modalProduct, modalOpen} = useContext(ProductContext);

    return (
        <>
            {modalOpen ?
                <ModalContainer>
                    <h3>Item added to Cart</h3>
                    <img src={modalProduct.img} alt={modalProduct.title}/>
                    <p>{modalProduct.title}</p>
                    <p>${modalProduct.price}</p>
                    <button>Continue Shopping</button>
                    <button>Go To Cart</button>
                </ModalContainer>
                :
                <></>

            }
        </>

    )
}
export default Modal;

const ModalContainer = styled.div`
  width: 50vw;
  hight: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: lightblue;
`