import React from 'react';
import { useState } from 'react';
import "../styles/Navigation.css"

function Navigation() {

    const [showLinks,setShowLinks] = useState(false)

    const handleShowlinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <div className={`navbar ${showLinks  ? "show-nav" : "hide-nav"}`}>
            <div className='navbar_logo'> TonyR</div>
                <ul className='navbar_links'>
                    <li className='navbar_item'>
                        <a href='/' className='navbar_link'> Accuiel</a>
                    </li>
                    <li className='navbar_item'>
                        <a href='/apropos' className='navbar_link'> A propos</a>
                    </li>
                    <li className='navbar_item'>
                        <a href='/contact' className='navbar_link'> Contact</a>
                    </li>
                    <li className='navbar_item'>
                        <a href='/porfolio' className='navbar_link'> Portfolio</a>
                    </li>
                </ul>
            <button className='navbar_burger' onClick={handleShowlinks}>
                <span className='burger-bar'></span>
            </button>
        </div>
    );
};

export default Navigation;