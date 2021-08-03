import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  click = () => {
    this.setState({
      // clicked: this.state.clicked + 1,
      // favorite: true
    })
    this.props.modal_on({image: this.props.image, title: this.props.title, price: this.props.price, description: this.props.description, category: this.props.category})
  }

  render() {
    console.log(this.state.products)
    return(
      <div>
        <Card style={{ width: '18rem', height: '30rem', margin: '1rem'}} onClick={this.click}>
          <Card.Img className="image" variant="top" src={this.props.image}/>
          <Card.Body>
            <Card.Title>Product Name: {this.props.title}</Card.Title>
            <Card.Text>
              {/* <p>Product Price: {this.props.price}</p> */}
              {/* <li class="list-group-item">Product Price: {this.props.price}</li> */}
              {/* <p>Product Description: {this.props.description}</p> */}
              {/* <p>Product Category: {this.props.category}</p> */}
            </Card.Text>
          </Card.Body>
          <div class="card-footer text-muted">
            Product Price: {this.props.price}
          </div>
        </Card>
        </div>
    )
  }
}

export default Products;