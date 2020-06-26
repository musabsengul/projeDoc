import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,} from "reactstrap"

 class Cart extends Component {
    renderSummary(){
        return (
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
               Your Cart
            </DropdownToggle>
            <DropdownMenu right>
                {
                    this.props.cart.map(cartItem =>(
                      <DropdownItem key={cartItem.product.id}>
                         <Badge onClick={()=>this.props.removeFromCart(cartItem)} color="danger">x</Badge> {cartItem.product.productName} <Badge  color="success">{cartItem.quantity}</Badge>
                      </DropdownItem>
                    ))
                }
             
              
            </DropdownMenu>
          </UncontrolledDropdown>
        )
    }
    renderEmpty(){
        return (
            <NavItem>
                <NavLink>
                    Empty Cart
                </NavLink>
            </NavItem>
        )
    }
    render() {
        return (
            <div>
               {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
            </div>
        )
    }
}
export default Cart;