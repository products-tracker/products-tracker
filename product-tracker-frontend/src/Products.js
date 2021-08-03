import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Product from './Product.js';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
     axios.get('http://localhost:3001/fakestore')
      .then(products => {
        this.setState({products: products.data})
      })
  }

  displayGrid = () => {
    console.log(this.state.products)

  }

  render() {
    console.log(this.state.products)
    return(
      <div className="container">
        <div className="row">
          {this.state.products.map((product, idx) => {
            return(
              <div className="col-sm-4">
                <Product modal_on={this.props.modal_on} image={product.image} title={product.title} price={product.price} description={product.description} category={product.category} /> 
              </div>
            )        
          })}
        </div>
      </div>
      
    )
  }
}

export default Products;