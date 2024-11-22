import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi eveniet temporibus eaque aspernatur facilis, expedita voluptatibus consequuntur maxime beatae, vero provident, sapiente magni architecto quisquam et placeat ab quidem!</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+228-97-36-15-33</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>copyright 2024 &copy; Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
