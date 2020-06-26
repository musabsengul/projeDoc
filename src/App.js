import React, { Component } from "react";
import Navi from "./components/navi/Navi";
import ProductList from "./components/product/ProductList";
import CategoryList from "./components/category/CategoryList";
import { Row, Col, Container } from "reactstrap";
import alerytify from "alertifyjs";

class App extends Component {
  state = {
    products: [
      {
        id: 53,
        categoryId: 6,
        productName: "Cappuccino",
        unitPrice: "10",
        unitsInStock: "50",
      },
      {
        id: 45,
        categoryId: 5,
        productName: "Çilekli Smoothie",
        unitPrice: "10",
        unitsInStock: "50",
      },
      {
        id: 41,
        categoryId: 4,
        productName: "Limonlu Milkshake",
        unitPrice: "10",
        unitsInStock: "50",
      },
      {
        id: 34,
        categoryId: 3,
        productName: "Papatya Çayı",
        unitPrice: "5",
        unitsInStock: "100",
      },
      {
        id: 23,
        categoryId: 2,
        productName: "Klasik Türk Kahvesi",
        unitPrice: "8",
        unitsInStock: "100",
      },
      {
        id: 14,
        categoryId: 1,
        productName: "Soda",
        unitPrice: "5",
        unitsInStock: "1000",
      },
    ],
    currentCategory: "",
    cart: [],
    currentProducts:[]
  };
  // componentDidMount() {
  //   this.getProducts();
  // }
  getProducts(categoryId) {
    let cProducts = this.state.products.filter(c=>c.categoryId===categoryId)
    this.setState({currentProducts:cProducts})
  }
  handleCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alerytify.success(product.productName + " sepete eklendi!")
  };
  removeFromCart=(cartItem)=>{
     let newCart = this.state.cart.filter(c=>c.product.id !== cartItem.product.id)
     this.setState({cart:newCart})
     alerytify.error(cartItem.product.productName + " sepete eklendi!")
  }
  render() {
    return (
      <Container>
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <Row>
          <Col xs="3">
            <CategoryList
              handleCategory={this.handleCategory}
              currentCategory={this.state.currentCategory}
            />
          </Col>
          <Col xs="9">
            <ProductList
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              addToCart={this.addToCart}
              currentProducts={this.state.currentProducts}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
