import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100

    const publishableKey = 'pk_test_51IRiO3AVdZ6W1FY5KPdYuuEPRWPneu4s1R4FMdOp8Adkay2zXwi5YW2WG32QkypEGNpWITi9EBq1l6NFXmRbL5zm005ADDW5rn'

    const onToken = (token)=>{
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Best Clothing SRL'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Ujt.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default  StripeCheckoutButton;