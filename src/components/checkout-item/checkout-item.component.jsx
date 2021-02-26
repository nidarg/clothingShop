import React from 'react';
import {connect} from 'react-redux';
import { clearItemFromCart,removeItem,addItem } from '../../redux/cart/cart-actions';


import './checkout-item.style.scss';

const CheckoutItem = ({item, clearItemFromCart, removeItem,addItem })=>{
    const{imageUrl,name,price,quantity} = item
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick = {()=>removeItem(item)} >&#10096;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick = {()=>addItem(item)}>&#10097;</div> 
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick = {()=>clearItemFromCart (item)}>&#10008;</div>

        </div>
    )
}
export default connect(null,{clearItemFromCart,removeItem,addItem })(CheckoutItem);