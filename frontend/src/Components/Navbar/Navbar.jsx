import React, { useState } from 'react'
import './Navbar.css' 
import { Link } from 'react-router-dom';


import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

  const [menu,setmenu]= useState("shop")

  return (
    <div className ='navbar'>
      <div className='nav-logo'>
         <img src={logo} alt="" width="95" height="95" />
         <p>STYLE UP</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() =>{setmenu("shop")}}><Link className="nav-link"to='/'>SHOP </Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setmenu("mens")}}><Link className="nav-link" to='/mens'>MEN</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() =>{setmenu("womens")}}><Link className="nav-link" to='/womens'>WOMEN</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() =>{setmenu("kids")}}><Link className="nav-link" to='/kids'>KID</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
           <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
         <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
