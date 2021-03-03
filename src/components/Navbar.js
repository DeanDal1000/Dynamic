import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyles';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  ButtonLink,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

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
            <NavButton>
              {button ? (
                <ButtonLink to="/sign">
                  <Button primary>SIGN UP</Button>
                </ButtonLink>
              ) : (
                <ButtonLink>
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </ButtonLink>
              )}
            </NavButton>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
