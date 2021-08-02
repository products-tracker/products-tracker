import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Store.js'
import SelectedStore from './SelectedStore.js'
import ProductForm from './ProductForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      display_modal: false
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ 
      product: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  modal_on = (obj) => {
    this.setState({
      display_modal: true,
      image_src: obj.image_src
    })
  }

  modal_off = () => {
    this.setState({
      display_modal: false
    })
  }

  render() {
    return(
      <div>
        <ProductForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div>
          <p>Stores</p>
          <Store modal_on={this.modal_on}/>
          <SelectedStore modal_on={this.state.display_modal} modal_off={this.modal_off}/>
        </div>
      </div>
    );
  }
}

export default App;
