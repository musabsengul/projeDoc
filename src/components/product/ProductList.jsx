import React, { Component } from "react";
import {Table,Button, Badge} from "reactstrap";
class ProductList extends Component {
  renderProducts(){
    return (
      <tbody>
      {
        this.props.products.map(product => (
        <tr key ={product.id}>
        <th scope="row">{product.id}</th>
        <td>{product.productName}</td>
        <td>{product.unitsInStock}</td>
        <td>{product.unitPrice}</td>
        <td><Button color="success" onClick={()=>this.props.addToCart(product)}>Add</Button></td>
        </tr>
        ))
      }
  </tbody>
    )
  }
  renderCurrentProducts(){
    return (
      <tbody>
      {
        this.props.currentProducts.map(product => (
        <tr key ={product.id}>
        <th scope="row">{product.id}</th>
        <td>{product.productName}</td>
        <td>{product.unitsInStock}</td>
        <td>{product.unitPrice}</td>
        <td><Button color="success" onClick={()=>this.props.addToCart(product)}>Add</Button></td>
        </tr>
        ))
      }
  </tbody>
    )
  }
  render() {
    return (
      <div>
        <h1><Badge color="success">{this.props.currentCategory}</Badge></h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Units In Stock</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          {
            this.props.currentCategory.length>0?this.renderCurrentProducts():this.renderProducts()
          }
        </Table>
      </div>
    );
  }
}


export default ProductList;