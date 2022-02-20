import React from "react";

import CustomButton from "../customBut/customBut";
import CartItem from "../cartItem.jsx/cartItem";
import { connect } from "react-redux";

import './cartDrop.scss'


const CartDropDown = ({cartItems, }) => (
    <div className="cart-dropdown">      
   <div className="cart-items">
     { cartItems.map(cartItem => (<CartItem 
     key={cartItem.id}
   item={cartItem}
  /> )) }
   </div>
<CustomButton> Go to checkout</CustomButton>

  </div>
);

const mapStateToProps =  ({ cart: { cartItems} }) => ({
  cartItems 
});

export default  connect(mapStateToProps)(CartDropDown)


