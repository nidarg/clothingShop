import React from 'react';
import {connect} from 'react-redux';
import {toogleCart} from '../../redux/cart/cart-actions';
import './cart-icon.style.scss';
import{selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {ReactComponent as ShopingIcon} from '../assets/cart.svg';

const CartIcon = ({toogleCart,itemsCount})=>{
    return(
        <div className='cart-icon' onClick={toogleCart}>
            <ShopingIcon   className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        itemsCount:selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, {toogleCart})(CartIcon);