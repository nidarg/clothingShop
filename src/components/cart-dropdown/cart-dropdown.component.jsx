import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import{toogleCart} from '../../redux/cart/cart-actions';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems,history,toogleCart})=>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
             {   cartItems.length ?
                (cartItems.map(cartItem=>{
                   return  <CartItem key={cartItem.id} item = {cartItem}/>
                })):
                <span className='empty-message'>Your Cart is empty</span>
            }
            </div>
            <CustomButton addToCart onClick={()=>{
                 history.push('/checkout')
                 toogleCart()
                }}>GO TO CHECKOUT</CustomButton>
         </div>   

    )
}

const mapStateToProps = createStructuredSelector({
   cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps,{toogleCart})(CartDropdown));