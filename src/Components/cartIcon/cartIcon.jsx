import React from 'react';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/CartAction'
import { selectCartItemCout } from '../../redux/cart/cartSelector'
import  { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg'

import './cartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
<div className='cart-icon' onClick={toggleCartHidden}> 
 <ShoppingIcon className='shopping-icon'/> 
 <span className='item-count'>{itemCount}</span>
</div>
)


const mapDispatchToProps = dispatch => ({
toggleCartHidden:  () => 
dispatch(toggleCartHidden())
});

const  mapStateToProps = (state) => ({
    itemCount: selectCartItemCout(state)
});




export default  connect( mapStateToProps,  mapDispatchToProps)(CartIcon)



// const  mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce(
//         (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,  
//         0 
//         )
// })