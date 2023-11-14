import React from 'react';
import HeaderWrapper from '../styles/HeaderWrapper.js'

import logo from '../assets/Logo.png'

import Nav from './Nav.js';

// import InstagramIcon from '@mui/icons-material/Instagram';
// import {faInstagram} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faLinkedinIn, faFacebookF, faYoutube, faSquareInstagram, faSquareTwitter} from '@fortawesome/free-brands-svg-icons'

import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'


function Header() {
 
 

  return (
    <HeaderWrapper>
        <div className='contact-links'>
          <div className='contact-icons-container'>
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className='contact-titles-container'>
            <p>Make a referral</p>
            <p>Contact us</p>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-icon' />
        </div>
        <img className='logo-image' src={logo} alt="Mustard Tree's Logo, showing the name in white in front of a red background"/>

        
        <Nav/>
    </HeaderWrapper>
    
  );
}

export default Header;
