import React from 'react';
import Card from 'react-bootstrap/Card';
import BestBuy from './img/BestBuy.jpeg';
import GreyHeart from './img/heart-grey.png';
import RedHeart from './img/red-heart.png';
import './Store.css';
import axios from 'axios';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      favorite: false,
      store: '',
      address: '',
      low_in_stock: '',
      distance: 0,
      favoriteStoreArr: []
    }
  }

  addStore = () => {
    // console.log(`http://localhost:3001/store?store=${this.state.store}&address=${this.state.address}&low_in_stock=${this.state.low_in_stock}&distance=${this.state.distance}&favorite=${this.state.favorite}`)
    axios.post(`http://localhost:3001/stores?store=${this.props.store}&address=${this.props.address}&low_in_stock=${this.props.low_in_stock}&distance=${this.props.distance}&favorite=true`)
    .then(() => this.setState({ store: '', address: '', low_in_stock: '', distance: 0, favorite: false}))
    .catch(error => {
      console.error('There was an error!', error);
  });
  }

  removeStore = () => {
    axios.delete(`http://localhost:3001/stores?store=${this.props.store}&address=${this.props.address}&low_in_stock=${this.props.low_in_stock}&distance=${this.props.distance}&favorite=false`)
    .then(() => this.setState({ store: '', address: '', low_in_stock: '', distance: 0, favorite: false}))
    .catch(error => {
      console.error('There was an error!', error);
  });
  }

  click = () => {
    // console.log(this.props)
    // this.setState({
    //   store: this.props.store, 
    //   address: this.props.address, 
    //   low_in_stock: this.props.low_in_stock, 
    //   distance: this.props.distance
    // })
    if (this.state.favorite === true) {
      this.setState({
        favorite: false
        //write a function that removes the store from the DB
      })
      this.removeStore()
    } else {
      this.setState({
        favorite: true
        //write a function that adds the store to the DB
      })
      this.addStore()
    }
    // this.props.modal_on({store: this.props.store, address: this.props.address, low_in_stock: this.props.low_in_stock, distance: this.props.distance})
  }

  render() {
    let fav = ''
    if (this.state.favorite === true) {
      fav = <img class="image" src={RedHeart} width='25px'/>
    } else {
      fav = <img class="image" src={GreyHeart} width='25px'/>
    }
    return(
    <Card style={{ width: '18rem', margin: '1rem'}} onClick={this.click}>
        <Card.Img variant="top" src={BestBuy} />
        <Card.Body>
          <Card.Title>{this.props.store}</Card.Title>
          <Card.Text>
            <p>Address: {this.props.address}</p>
            <p>Inventory: {this.props.low_in_stock}</p>
            <p>Distance: {this.props.distance}</p>
          </Card.Text>
        </Card.Body>
        <div class="card-footer text-muted">
          {fav}
        </div>
      </Card>
    )
  }
}

export default Store;