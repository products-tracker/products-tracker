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
          <Modal.Header>
            <Modal.Title>{this.props.store.store}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Address: {this.props.store.address}</p>
            <p>Inventory: {this.props.store.low_in_stock}</p>
            <p>Distance: {this.props.store.distance}</p>
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

