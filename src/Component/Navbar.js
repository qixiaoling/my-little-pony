import React from 'react';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import SearchBar from "./SearchBar";
import pony from '../Assets/Images/pony-logo.png';
import './Navbar.css'
import {animateScroll as scroll} from 'react-scroll';

function Navbar({navQuery}) {

    function toggleHome() {
        scroll.scrollToTop();
    }

    return (
        <nav className='nav-container'>
            <LinkR className='logo-link' to='/' onClick={toggleHome}>
                <img className='pony-logo' src={pony} alt='pony-logo'/>
            </LinkR>

            <ul>
                <li>
                    <LinkS to='pony-card'
                           smooth={true} duration={500} spy={true} exact='true'
                    >
                        Meeting the friends
                    </LinkS>
                </li>
                <li>
                    <LinkR to='/products'>
                        Products
                    </LinkR>
                </li>
                <li>
                    <SearchBar searchBarQuery={navQuery}/>
                </li>
                <li>
                    <LinkR to='/cart'>Cart</LinkR>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;