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

  
  const renderWishlist = function(wishlist){
    // let movieCard = [];
    // console.log(wishlist);
    // for(var i = 0 ; i < wishlist.length; i++){
    //   movieCard.push(<DropdownItem>{wishlist[i]}</DropdownItem>)
    // }
    const movieCard = wishlist.map(movie => {return <DropdownItem>{movie}</DropdownItem>})
    return movieCard;
  }

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
      <NavItem onClick={() => buttonClick()}>
        <Dropdown isOpen={buttonOpen}>
          <DropdownToggle caret>{props.countfilms} films</DropdownToggle>
          <DropdownMenu>
            {renderWishlist(props.wishfilms)}
          </DropdownMenu>
        </Dropdown>



      {/* <Button onClick={() => buttonClick()}>Bonjour</Button>
        <Popover isOpen={buttonOpen} toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover> */}


      </NavItem>
    </Nav>
  );
}

export default Navbar;
