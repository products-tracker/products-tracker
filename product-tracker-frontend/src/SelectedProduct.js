import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render () {
    console.log(this.props.product)
    return(
      <Modal show={this.props.modal_show} onHide={this.props.modal_off}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Product Name{this.props.product.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card style={{ width: '18rem', margin: 'auto'}} onClick={this.click}>
              <Card.Img variant="top" src={this.props.product.image} />
            </Card>
            {/* <img src={this.props.product.image}/> */}
            <p>Product Name: {this.props.product.title}</p>
            <p>Product Description: {this.props.product.description}</p>
            <p>Price: {this.props.product.price}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.modal_off}>Close</Button>
            {/* <Button variant="primary">Save changes</Button> */}
          </Modal.Footer>
        </Modal.Dialog>
    </Modal>
    )
  }

}

export default SelectedProduct;

