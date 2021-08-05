import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Store.js';
import SelectedStore from './SelectedStore.js';
import axios from 'axios';
import './ProductForm.css';
import './img/SearchIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// const search = <FontAwesomeIcon icon={faSearch} />
import InputGroup from 'react-bootstrap/InputGroup';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '',
      postalCode: '',
      stores: []
    }
  }

  getStores = () => {
    console.log('here in getStores')
    console.log('sku: ' + this.state.sku)
    console.log('zip code: ' + this.state.postalCode)
    axios.get(`http://localhost:3001/products?sku=${this.state.sku}&postalCode=${this.state.postalCode}`)
     .then(stores => {
       this.setState({stores: stores.data})
     })
     console.log(this.state.stores)
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
    console.log('here')
    e.preventDefault()
    this.getStores()
    this.props.storesData(this.state.stores)
    console.log('stores: ' + this.state.stores)
  }

  render() {
    return(
      <Form>
        <Form.Group className="formgroup" controlId="formcontroller">
          {/* <Form.Label>Product SKU #</Form.Label> */}

          {/* <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                    <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
            </InputGroup.Prepend> */}

          <Form.Control className="product" type="text" placeholder="Enter Product SKU" onInput={this.handleChangeSku} />
          {/* <Form.Label>Zip Code</Form.Label> */}
          <Form.Control className="zipcode" type="text" placeholder="Enter Zip Code" onInput={this.handleChangePostalCode} />

          {/* </InputGroup> */}

        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default ProductForm;
  