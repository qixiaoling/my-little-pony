import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";
import {Link as LinkR} from "react-router-dom";

function Modal() {
    const {modalProduct, modalOpen, closeModal} = useContext(ProductContext);

    return (
        <>
            {modalOpen ?
                <ModalContainer>
                    <div className='modal-container'>
                        <h3>Item added to Cart</h3>
                        <img src={modalProduct.img} alt={modalProduct.title} className='modal-img'/>
                        <p>{modalProduct.title}</p>
                        <p>${modalProduct.price}</p>
                        <LinkR to='/products'>
                            <button onClick={()=>closeModal()}>
                                Continue Shopping
                            </button>
                        </LinkR>
                        <LinkR to='/cart'>
                            <button onClick={()=>closeModal()}>
                               Go to Cart
                            </button>
                        </LinkR>
                    </div>
                </ModalContainer>
                :
                <></>

            }
        </>

    )
}
export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5 );
  display: grid; /*new!!!*/
  place-items: center;
  
  .modal-container {
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .modal-img {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  
`