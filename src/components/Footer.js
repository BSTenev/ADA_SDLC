import React from 'react';

import FooterWrapper from '../styles/FooterWrapper';
    

function Footer() {

  return (
    <FooterWrapper>
      <div className='footer-section'>
        <h3>USEFUL LINKS</h3>
        <p>Get Help</p>
        <h3>SUPPORT US</h3>
        <p>Activities</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
      </div>
      <div className='footer-section'>
      <h3>LATEST TWEET</h3>
      <p>Tweet 1</p>
      <p>Tweet 2</p>
      <p>Tweet 3</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
