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
    return(
      <Modal show={this.props.modal_on} onHide={this.props.modal_off}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
            <img src={this.props.image_src}/>
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

