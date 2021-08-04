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
    this.props.modal_on({store: this.props.store, address: this.props.address, low_in_stock: this.props.low_in_stock, distance: this.props.distance})
  }

  render() {
    return(
    <Card style={{ width: '18rem' }} onClick={this.click}>
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title>Store Name: {this.props.store}</Card.Title>
          <Card.Text>
            <p>Address: {this.props.address}</p>
            <p>Product Stock: {this.props.low_in_stock}</p>
            <p>Distance: {this.props.distance}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Store;