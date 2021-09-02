import React, {useContext} from 'react';
import './CardItem.css'
import {ProductContext} from "../../context/productContext";

function CartItem(props) {
    const {id, title, img, price, count, total} = props.cartItem;
    const {increment, decrement, removeItem} = useContext(ProductContext);
    return (
        <>
            <td>
                <img className='cart-item-img' src={img} alt={title}/>
            </td>
            <td>
                {title}
            </td>
            <td>
                {price}
            </td>
            <td className='count-update'>
                <span onClick={() => decrement(id)}>
                   <i className="far fa-minus-square"></i>
                </span>
                <span>
                    {count}
                </span>
                <span onClick={() => increment(id)}>
                    <i className="far fa-plus-square"></i>
                </span>
            </td>
            <td>
                <button onClick={() => removeItem(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>

            </td>
            <td>
                {total}
            </td>
        </>


    )
}

export default CartItem;
