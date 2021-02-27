import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  HamburgerMenu,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleonClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <NavIcon />
            DYNAMIC
          </NavLogo>
          <HamburgerMenu className="menu" onClick={handleonClick}>
            {/* use Ternary operator if clicked use FaTimes */}
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
