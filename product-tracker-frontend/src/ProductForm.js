import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Store from './Store.js'
//import SelectedStore from './SelectedStore.js'
import axios from 'axios'

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '',
      postalCode: '',
      stores: []
    }
  }

  getStores = async () => {
    await axios.get(`http://localhost:3001/products?sku=${this.state.sku}&postalCode=${this.state.postalCode}`)
     .then(stores => {
       this.setState({stores: stores.data})
     })
 }

  handleChangeSku = e => {
    e.preventDefault()
    this.setState({ 
      sku: e.target.value
    })
  }

  handleChangePostalCode = e => {
    e.preventDefault()
    this.setState({ 
      postalCode: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.getStores()
    this.props.storesData=({storeData: this.state.stores})
    console.log('stores: ' + this.state.stores)
  }

  render() {
    return(
      <Form>
        <Form.Group controlId="formcontroller">
          <Form.Label>Product</Form.Label>
          <Form.Control type="text" placeholder="Enter Product" onInput={this.handleChangeSku} />
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Location" onInput={this.handleChangePostalCode} />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default ProductForm;
  