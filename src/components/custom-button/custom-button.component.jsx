import React from 'react';
import './custom-button.styles.scss';

// children -> type = 'submit'
const CustomButton = ({children, isGoogleSignIn,  ...otherProps})=>(
    <button 
    className={`${isGoogleSignIn? 'google-sign-in':'' } submit-btn`} {...otherProps}>
        
        {children} 
    </button>
)
export default CustomButton;