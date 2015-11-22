/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';

import GoogleSigninButton from '../GoogleSigninButton';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class Header extends Component {

  render() {
    return (
      <Navbar>
        <NavbarHeader>
          <NavbarBrand>
            <a href="#">Home</a>
          </NavbarBrand>
        </NavbarHeader>
        <NavbarCollapse>
          <Nav pullRight>
            <GoogleSigninButton />
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }

}

export default Header;
