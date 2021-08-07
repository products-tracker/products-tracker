import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import './ProductForm.css';
import './img/SearchIcon.png';



class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '',
      postalCode: '',
      stores: [],
      range: 0
    }
  }

  getStores = () => {
    console.log('here in getStores')
    console.log('sku: ' + this.state.sku)
    console.log('zip code: ' + this.state.postalCode)
    axios.get(`https://product-tracker-final.herokuapp.com/products?sku=${this.state.sku}&postalCode=${this.state.postalCode}`)
     .then(stores => {
      this.props.storesData(stores.data)
     })
     console.log(this.state.stores)
 }
  getPriceAndName = () => {
    axios.get(`https://product-tracker-final.herokuapp.com/price?sku=${this.state.sku}`)
     .then(product => {
      this.props.productInfo(product.data)
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
  handleChangeRange = e => {
    e.preventDefault()
    this.setState({ 
      range: parseFloat(e.target.value)
    })
  }

  handleSubmit = async (e) => {
    console.log('here')
    e.preventDefault();
    this.getStores();
    this.getPriceAndName();
    this.props.updateRange(this.state.range);
    console.log('stores: ' + this.state.stores)
  }

  render() {
    return(
      <div className="form">
      <Form>
        <Form.Group className="formgroup" controlId="formcontroller">
          

          <Form.Control className="product" type="text" placeholder="Enter Product SKU" onInput={this.handleChangeSku} />
          
          <Form.Control className="zipcode" type="text" placeholder="Enter Zip Code" onInput={this.handleChangePostalCode} />

          <Form.Control className="range" type="float" placeholder="Range Rrom This Zip Code, 1-250 miles" onInput={this.handleChangeRange} />

          

          {this.state.range > 0 && <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>}
        </Form.Group>

      </Form>
      </div>
    )
  }
}

export default ProductForm;
  