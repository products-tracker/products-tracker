import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
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
import './ProductForm.css';


class ProductForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      products: []
    }
  }

  getProducts = () => {
    console.log('here in getProducts')
    console.log('product: ' + this.state.product)
    axios.get(`http://localhost:3001/productList?product=${this.state.product}`)
     .then(products => {
      this.props.productData(products.data)
     })
     console.log(this.state.products)
 }

  handleChangeProduct = e => {
    e.preventDefault()
    this.setState({ 
      product: e.target.value
    })
  }

  handleSubmit = e => {
    console.log('here')
    e.preventDefault()
    this.getProducts()
    //this.props.storesData(this.state.stores)
    console.log('products: ' + this.state.products)
  }

  render() {
    return(
      <div className="form">
      <Form>
        <Form.Group className="formgroup" controlId="formcontroller">
          {/* <Form.Label>Product SKU #</Form.Label> */}

          {/* <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                    <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
            </InputGroup.Prepend> */}

          <Form.Control className="product" type="text" placeholder="Enter Product Name" onInput={this.handleChangeProduct} />
          {/* <Form.Label>Zip Code</Form.Label> */}
          {/* <Form.Control className="zipcode" type="text" placeholder="Enter Zip Code" onInput={this.handleChangePostalCode} /> */}

          {/* </InputGroup> */}

          <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
        </Form.Group>

      </Form>
      </div>
    )
  }
}

export default ProductForm2;
  