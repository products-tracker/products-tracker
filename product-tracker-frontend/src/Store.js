import React from 'react';
import Card from 'react-bootstrap/Card';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    }
  }

  click = () => {
    this.setState({
      // clicked: this.state.clicked + 1,
      // favorite: true
    })
    this.props.modal_on({image_src: this.props.image_src, store_name: this.props.store_name, product_name: this.props.product_name, product_quantity: this.props.product_quantity, distance: this.props.distance})
  }

  render() {
    return(
    <Card style={{ width: '18rem' }} onClick={this.click}>
        <Card.Img variant="top" src={this.props.image_src} />
        <Card.Body>
          <Card.Title>Store Name: {this.props.store_name}</Card.Title>
          <Card.Text>
            <p>Product Name: {this.props.product_name}</p>
            <p>Product Quantity: {this.props.product_quantity}</p>
            <p>Distance: {this.props.distance}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Store;