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

  // var wishListClick = () => {
  //   console.log("click detecté");
  // }

  const movieCard = props.wishfilms.map((movie) => {
    return (
  <DropdownItem /*onClick={ () => wishListClick() }*/ ><img width='25%' src={movie.img} alt={movie.name}/> {movie.name}</DropdownItem>
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
      <NavItem className="dropdowsize">
        <Dropdown isOpen={buttonOpen} caret onMouseEnter={() => buttonClick(true)} onMouseLeave={() => buttonClick(false)}>
          <DropdownToggle>{props.countfilms} film(s) favoris</DropdownToggle>
          <DropdownMenu>
            {movieCard}
          </DropdownMenu>
        </Dropdown>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
