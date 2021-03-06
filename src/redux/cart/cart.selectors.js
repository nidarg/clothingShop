
//use reselect will allow us to 
// memoize and not re-render a component 
// if the state value does not change

import {createSelector} from 'reselect';

const selectCart = state=> state.cart     //from cart reducer(represents a slide of state)

 export const selectCartItems = createSelector(
     [selectCart],
     (cart)=>cart.cartItems
 );

 export const selectCartHidden = createSelector(
     [selectCart],
     cart=>cart.hidden
 )
 export const selectCartItemsCount = createSelector(
     [selectCartItems],
     cartItems=>cartItems.reduce((acumulatedQuantity,cartItem)=>
     acumulatedQuantity + cartItem.quantity,0)
 )

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((acumulatedQuantity,cartItem)=>
        acumulatedQuantity+cartItem.quantity * cartItem.price,0)
)