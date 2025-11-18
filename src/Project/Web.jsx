import React from 'react'
import './Web.css'
import {NavLink} from 'react-router-dom'
import Products from './Products_Nav/products'
import Ads from './Ads_Sec/Ads'
import Top_Deals from './Top Deals/Top_Deals'
import Fifth from './Fivth_Sec/Fifth'
import Footer from './Footer_sec/Footer'
import BtmFooter from './Footer_sec/Btmfooter'

const Web = () => {
  return (
  <div>
     <nav>
        <ul>
          <img src={'/image.png'} alt="logo" className='logo'/>
          <div className='search_cont'>
             <svg width="26" height="26" className="search_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
             <span className='search_text'>Search for Products, Brands, and More</span>
          </div>

          <li>
            <NavLink to="/Login" className={({ isActive }) => isActive ? 'active-link' : ''}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="harsha" class="-dOa_b L_FVxe" width="24" height="24"></img>
              {/* <span className='Txt'>Login</span> */}
              <div class="hover-container">
                Login
                  <span class="hover-text">Created By Harsha!</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Cart" className={({ isActive }) => isActive ? 'active-link' : ''}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" class="_1XmrCc" width="24" height="24"></img>
              <span className='Txt'>Cart</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Seller" className={({ isActive }) => isActive ? 'active-link' : ''}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" class="_1XmrCc"></img>
              <span className='Txt'>Become a Seller</span>
            </NavLink>
          </li>
        </ul>
     </nav>

    <Products/>
    <Ads/>
    <Top_Deals/>
    <Fifth/>
    <Footer/> 
    <BtmFooter/>
  </div>
  )
}

export default Web