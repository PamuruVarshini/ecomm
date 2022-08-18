import { Divider } from '@mui/material';
import React from 'react'
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart_section">
        <div className="cart_container">
            <div className="left_cart">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="cart_img" />
                <div className="cart_btn">
                    <button className="cart_btn1">Add to Cart</button>
                    <button className="cart_btn2">Buy Now</button>

                </div>
            </div>
            <div className="right_cart">
                <h3>Fitness Gear</h3>
                <h4>Pigeon Favourite Electric Kettle(1.5 l, Silver, Black)</h4>
                <Divider />
                <p className="mrp">M.R.P. : ₹1195</p>
                <p>Deal of the day : <span style={{color:"#B12704"}}>₹625.00/</span></p>
                <p>You Save : <span style={{color:"#B12704"}}>₹570(47%)/</span></p>
                <div className='discount_box'>
                    <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>
                    <h4>Free Delivery : <span style={{color:"#111",fontWeight:600}}>Oct 8 - 21</span>Details</h4>
                    <p>Fastest delivery: <span style={{color:"#111",fontWeight:600}}>Tomorrow 11AM</span></p>
                </div>
                <p className="description"> </p>
                About the Iteam : <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}> This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.</span>
            </div>
        </div>
      
    </div>
  )
}

export default Cart
