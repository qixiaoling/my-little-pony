import React from 'react';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import SearchBar from "./SearchBar";
import pony from '../Assets/Images/pony-logo.png';
import './Navbar.css'

function Navbar({navQuery}) {
    return (
        <nav className='nav-container'>
            <img className='pony-logo' src={pony} alt='pony-logo'/>
            <ul>
                <li>
                    <LinkS to='ponies'>
                        Meeting the friends
                    </LinkS>
                </li>
                <li>
                    <LinkR to='/product'>
                        Products
                    </LinkR>
                </li>
                <li>
                    <SearchBar searchBarQuery={navQuery}/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;