import "../stylesheet/navbar.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <Nav className="nav">
      <NavItem>
        <img src={logo} alt="logo" />
      </NavItem>
      <NavItem>
        <NavLink className="title" href="#">
          Last Releases
        </NavLink>
      </NavItem>
      <NavItem>
        <ButtonDropdown toggle={function noRefCheck() {}}>
          <DropdownToggle caret>11 films</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
