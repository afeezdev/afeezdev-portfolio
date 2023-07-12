import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/webDevLogo.svg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Tilt } from 'react-tilt';


import "./header.scss";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navigation shadow-lg">
        <Navbar id='navbar' className="navbar navbar-dark ma" expand="md">
          <div className='navbar-brand'>
              <NavbarBrand tag={Link} to="/">
                <Tilt>
                  <Logo />
                </Tilt>
              </NavbarBrand>
            </div>
          <div className='options'>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto " navbar>
                <NavItem className="option">
                  <NavLink tag={Link} to="/about-me" >ABOUT</NavLink>
                </NavItem>
                <NavItem className="option">
                  <NavLink tag={Link} to="/projects" >PROJECTS</NavLink>
                </NavItem >
                <NavItem className="option">
                  <NavLink tag={Link} to="/feedback" >FEEDBACK</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  };
}


