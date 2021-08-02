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
    this.props.modal_on({image_src: this.props.image_src})
  }

  render() {
    return(
    <Card style={{ width: '18rem' }} onClick={this.click}>
        <Card.Img variant="top" src={this.props.image_src} />
        <Card.Body>
          <Card.Title>Store Name: {this.props.store_name}</Card.Title>
          <Card.Text>
            <p>Product Name: {this.props.product_name}</p>
            <p>Product Quantity: {this.product_quantity}</p>
            <p>Distance: {this.store_distance}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Store;