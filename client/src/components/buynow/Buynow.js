import { Divider} from '@mui/material';
import React from 'react'
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import "./buynow.css";


const Buynow = () => {
  return (
    <div className="buynow_section">
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping cart</h1>
                <p>Select all items</p>
                <span className="leftbuyprice">Price</span>
                <Divider />

                <div className="item_containert">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="cart_img"/>
                    <div className="item_details">
                        <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize) </h3>
                        <h3>Smart Watches</h3>
                        <h3 className='diffrentprice'>₹4049.00</h3>
                        <p className="unusuall">Usually dispatched in 8 days.</p>
                        <p>Eligible for Free Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo"/>
                        <Option />
                    </div>
                    <h3 className="item_price">₹4049.00</h3>
                </div>
                <Divider />
                <Subtotal />
            </div>
            <Right />
        </div>
      
    </div>
  )
}

export default Buynow
