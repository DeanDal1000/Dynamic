import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLinks,
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
          <NavMenu onClick={handleonClick} click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products">Products</NavLinks>
            </NavItem>
            {/* <NavButton>
              {button ? ()}
            </NavButton> */}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
