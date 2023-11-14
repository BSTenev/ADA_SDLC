import React from 'react';

import NavWrapper from '../styles/NavWrapper';
    

function Nav() {
 
  const navOptions = ['Get Help', 'Support Us', 'Shop', 'Track Donation', 'About Us']

  const navOptionList = navOptions.map( option => <h3 className='nav-option'>{option}</h3>)

  return (
    <NavWrapper>
      {navOptionList}
    </NavWrapper>
  );
}

export default Nav;
