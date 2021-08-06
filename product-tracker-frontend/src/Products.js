import React from 'react';
import axios from 'axios';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import Product from './Product.js';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  // componentDidMount() {
  //    axios.get('http://localhost:3001/fakestore')
  //     .then(products => {
  //       this.setState({products: products.data})
  //     })
  // }

  // displayGrid = () => {
  //   console.log(this.state.products)

  // }

  render() {
    console.log(this.state.products)
    return(
      <div className="container">
        <div className="row">
          {this.props.products.map((product, idx) => {
            return(
              <div className="col-sm-4">
                <Product modal_on={this.props.modal_on} image={product.image} sku={product.sku} price={product.price} name={product.name} /> 
              </div>
            )        
          })}
        </div>
      </div>
      
    )
  }
}

export default Products;