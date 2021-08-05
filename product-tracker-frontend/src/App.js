import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Store.js';
import SelectedStore from './SelectedStore.js';
import ProductForm from './ProductForm.js';
import Header from './Header.js';
import data from './data.json';
import Stores from './Stores.js'
import Products from './Products.js'
import SelectedProduct from './SelectedProduct.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from './AboutUs.js';
import Profile from './Profile.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      display_modal: false,
      obj: '',
      storesData: []
    }
  }

  modal_on = (obj) => {
    this.setState({
      display_modal: true,
      obj: obj
    })
  }

  modal_off = () => {
    this.setState({
      display_modal: false
    })
  }

  storesData = (stores) => {
    this.setState({
      storesData: stores
    })
  }

  render() {
    console.log(this.state.obj)
    return(
      <div>
        <Router>
          <Header />
          <Switch>
          <Route exact path="/">
            <ProductForm storesData={this.storesData} />
              <Stores stores={this.state.storesData} modal_on={this.modal_on} />
              <SelectedStore modal_show={this.state.display_modal} modal_off={this.modal_off} store={this.state.obj} />
              {/* <Products modal_on={this.modal_on} />
              <SelectedProduct modal_show={this.state.display_modal} modal_off={this.modal_off} product={this.state.obj} /> */}
            </Route>
          </Switch>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
        </Router>
        {/* <div>
          {this.props.auth0.isAuthenticated &&
            <Profile />
          }
        </div> */}
      </div>
    );
  }
}

export default App;
