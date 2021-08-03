import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Store.js'
import SelectedStore from './SelectedStore.js'

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <Form>
        <Form.Group controlId="formcontroller">
          <Form.Label>Product</Form.Label>
          <Form.Control type="text" placeholder="Enter Product" onInput={this.props.handleChange} />
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Location" onInput={this.props.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={this.props.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default ProductForm;
  