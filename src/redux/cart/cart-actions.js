import cartActionTypes from './cart-types';

export const toogleCart = ()=>{
    return{
        type:cartActionTypes.TOOGLE_CART
    }
}

export const addItem =(item)=>{
    return{
        type:cartActionTypes.ADD_ITEM,
        payload:item
    }
}