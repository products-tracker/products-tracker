import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render () {
    console.log(this.props.store)
    return(
      <Modal show={this.props.modal_show} onHide={this.props.modal_off}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Store Name{this.props.store.store_name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Product Name: {this.props.store.product_name}</p>
            <p>Product Quanity: {this.props.store.product_quantity}</p>
            <p>Distance: {this.props.store.distance}</p>
            <img src={this.props.store.image_src}/>
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


export default SelectedStore;

