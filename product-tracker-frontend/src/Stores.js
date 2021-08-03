import React from 'react';
import Store from './Store.js';

class Stores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  // "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
  // "store_name": "Kohl's",
  // "product_name": "PS5",
  // "product_quantity": 5,
  // "distance": 2.5

  render() {
    return(
      this.props.data.map(store => {
          return <Store modal_on={this.props.modal_on} image_src={store.image_url} store_name={store.store_name} product_name={store.product_name} product_quantity={store.product_quantity} distance={store.distance} />
        }
      )
    )
  }
}

export default Stores;