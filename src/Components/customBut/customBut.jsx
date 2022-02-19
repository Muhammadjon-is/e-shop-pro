import React from 'react';
import "./customButton.scss"

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps }) => (
 

<button 
className={`${inverted ? 'inverted' : ""} custom-button `}
 {...otherProps} >

{children}

</button>




 
);

export default CustomButton;
