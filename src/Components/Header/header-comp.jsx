import React from "react"
import { Link } from "react-router-dom"
 import "./header-comp.scss"
import {ReactComponent as Logo} from "../../assets/Crown.svg" 
import { auth } from "../../firebase/firebaseUtil"
import {connect} from 'react-redux'

const Header = ({ currentUser }) =>(
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
     (<div className="option" onClick={() => auth.signOut()}>Sign Out</div>)
      :
      ( <Link className="option" to="/signin"> Sign in</Link>)
}



{/* <Cart currentUser =  {currentUser} /> */}

</div>
</div>
);

const mapStateToProps = state => ({
currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)


