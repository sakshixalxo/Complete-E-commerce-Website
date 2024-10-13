import React, { useState } from 'react'
import './Navbar.css' 

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
        <li onClick={() =>{setmenu("shop")}}>SHOP {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setmenu("mens")}}>MEN {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() =>{setmenu("womens")}}>WOMEN {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() =>{setmenu("kids")}}>KID {menu==="kids"?<hr/>:<></>}</li>
        </ul>
           <div className='nav-login-cart'>
         <button>Login</button>
         <img src={cart_icon} alt="" />
         <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
