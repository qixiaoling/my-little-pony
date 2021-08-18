import React from 'react';
import pony from "../Assets/Images/pony-logo.png";
import {Link as LinkR} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";
import './Footer.css'

function Footer() {
    function toggleHome() {
        scroll.scrollToTop();
    }
    return(
        <div className='footer-container'>
            <div className='footer-left'>
                <LinkR className='footer-logo-link' to='/' onClick={toggleHome}>
                    <img className='footer-pony-logo' src={pony} alt='pony-logo'/>
                </LinkR>
            </div>
            <div className='footer-right'>
                <ul className='footer-text-One'>
                    <li>
                        <a href='/'>Where to Buy</a>
                    </li>
                    <li>
                        <a href='/'>Site Map</a>
                    </li>
                    <li>
                        <a href='/'>Corporate</a>
                    </li>
                    <li>
                        <a href='/'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='/'>Terms and Conditions of Use</a>
                    </li>
                </ul>
                <p className='footer-text-Two'>PRODUCTS NOT AVAILABLE EVERYWHERE</p>
                <p className='footer-text-Three'>
                    © 2021 Hasbro. All rights reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer;