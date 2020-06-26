import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  state = { categories: [{
    "id": 1,
    "categoryName": "Soguk Icecekler"
  },
  {
    "id": 2,
    "categoryName": "Klasik Kahveler"
  },
  {
    "id": 3,
    "categoryName": "Bitki Çayları"
  },
  {
    "id": 4,
    "categoryName": "Milkshake"
  },
  {
    "id": 5,
    "categoryName": "Smoothie"
  },
  {
    "id": 6,
    "categoryName": "Espressolu Kahveler"
  }] };
  // componentDidMount() {
  //   this.getCategories();
  // }
  // getCategories() {
  //   fetch("http://localhost:3000/categories")
  //     .then((r) => r.json())
  //     .then((data) => this.setState({ categories: data }));
  // }
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <ListGroup  className="list">
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.id} onClick={() => this.props.handleCategory(category)} active={category.categoryName===this.props.currentCategory?true:false} style={{border:"none"}}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        
      </div>
    );
  }
}

export default CategoryList;
