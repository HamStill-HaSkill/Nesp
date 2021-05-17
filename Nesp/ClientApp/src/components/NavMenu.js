import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const NavMenu = (props) => {
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <ul className="navbar-nav flex-grow flex-reverce">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
            </NavItem>
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;