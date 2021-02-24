
export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existingCartItem = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id)
    if(existingCartItem){
        return cartItems.map(cartItem=>       // return a new array in order to rerender
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem,quantity:cartItem.quantity + 1}
            :cartItem
        )
    }

    return [...cartItems,{...cartItemToAdd, quantity:1}]
}