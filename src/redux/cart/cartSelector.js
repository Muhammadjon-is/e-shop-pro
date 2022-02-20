import { createSelector} from 'reselect'

const selectCart = state => state.cart;


// const selectUser = state => state.user

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemCout = createSelector(
  [selectCartItem],
  cartItems => 
  cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
      accumalatedQuantity + cartItem.quantity,
      0
  )
    
)

