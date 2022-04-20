import "../stylesheet/navbar.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  DropdownItem,
} from "reactstrap";

function Navbar(props) {

  const [buttonOpen, setButtonOpen] = useState(false);

  var buttonClick = () => {
    if (buttonOpen === true) {
      setButtonOpen(false);
    } else {
      setButtonOpen(true);
    }
  };

  const movieCard = props.wishfilms.map((movie) => {
    return (
  <DropdownItem ><img width='25%' src={movie.img} alt="salut"/> {movie.name}</DropdownItem>
  )
})

  return (
    <Nav className="nav">
      <NavItem>
        <img src="../images/logo.png" alt="logo" />
      </NavItem>
      <NavItem>
        <NavLink className="title" href="#">
          Last Releases
        </NavLink>
      </NavItem>
      <NavItem onClick={() => buttonClick()} className="dropdowsize">
        <Dropdown isOpen={buttonOpen}>
          <DropdownToggle caret>{props.countfilms} films</DropdownToggle>
          <DropdownMenu>
            {movieCard}
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
