import React from 'react';
//import BestBuy from './img/BestBuy.jpeg';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import './Store.css';


class Store extends React.Component {



  render() {
    return(
    <Card  style={{ width: '18rem', margin: '1rem'}} onClick={this.click}>
        <Card.Img variant="top" src={`${this.props.product.url}`} />
        <Card.Body>
          <Card.Title>{this.props.product.sku}</Card.Title>
          <Card.Text>
            <p>Name: {this.props.product.name}</p>
            <p>Price: {this.props.product.price}</p>
          </Card.Text>
          {/* <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button> */}
        </Card.Body>
      </Card>
    )
  }
}

export default Store;