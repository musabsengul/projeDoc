import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Cart from './Cart';

class  Navi extends Component{
    render(){
        return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">PROJE</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
  <NavLink href="/components/"></NavLink>
            </NavItem>
            <Cart cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
          </Nav>
      </Navbar>
    </div>
  );
    }
  
}

export default Navi;