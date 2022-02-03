import React from "react"
import { Link } from "react-router-dom"
 import "./header-comp.scss"
import {ReactComponent as Logo} from "../../assets/Crown.svg" 


const Header = () =>(
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

</div>

</div>


)

export default Header


