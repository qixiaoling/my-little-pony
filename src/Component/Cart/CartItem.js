import React from 'react';

function CartItem(props) {
    const {title, img, price, count, total} = props.cartItem;
    return(
        <>
            <td>
                <img src={img} alt={title}/>
            </td>
            <td>
                {title}
            </td>
            <td>
                {price}
            </td>
            <td>
                {count}
            </td>
            <td>
                <i className="fas fa-trash-alt"></i>
            </td>
            <td>
                {total}
            </td>
        </>


    )
}
export default CartItem;