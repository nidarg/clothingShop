import React from 'react';
import './custom-button.styles.scss';

// children -> type = 'submit'
const CustomButton = ({children, isGoogleSignIn, addToCart, ...otherProps})=>(
    <button 
    className={`${isGoogleSignIn? 'google-sign-in':'' }
                ${addToCart?'add-to-cart':''} submit-btn`} 
    {...otherProps}>
        
        {children} 
    </button>
)
export default CustomButton;