import React from "react"
import { Link } from "react-router-dom"
 import "./header-comp.scss"
import {ReactComponent as Logo} from "../../assets/Crown.svg" 
import { auth } from "../../firebase/firebaseUtil"
import {connect} from 'react-redux'
import CartIcon from "../cartIcon/cartIcon"
// import CartDropDown from "../cartDrop/cartDrop"
import CartDropDown from "../cartDrop/cartDrop"


const Header = ({ currentUser, hidden }) => (
<div className="header">
<Link className="logo-container" to="/">
<Logo className='logo' />
</Link>

<div className="options">

<Link className="option" to="/">
    <h3>HOME PAGE</h3>
 </Link>

   <Link className="option" to="/shop">
    SHOP      
 </Link>

 <Link className="option" to="/contact">
    CONTACT      
 </Link>
 
  
{
   currentUser ?
     (<div className="option" onClick={() => auth.signOut()}>
        Sign Out
     </div>
     ) : ( <Link className="option" to="/signin"> Sign in</Link>)
      
}
<CartIcon className='option'/>
</div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});



export default connect(mapStateToProps)(Header)

