import React from 'react';
import {connect} from 'react-redux';
import {toogleCart} from '../../redux/cart/cart-actions';
import './cart-icon.style.scss';

import {ReactComponent as ShopingIcon} from '../assets/cart.svg';

const CartIcon = ({toogleCart})=>{
    return(
        <div className='cart-icon' onClick={toogleCart}>
            <ShopingIcon   className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}



export default connect(null, {toogleCart})(CartIcon);