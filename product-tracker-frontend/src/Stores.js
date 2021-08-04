import React from 'react';
import Store from './Store.js';

class Stores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  // this.store = data.name ;
  // this.address = data.address;
  // this.lowInStock = data.lowStock;
  // this.distance = data.distance;

  render() {
    return(
      this.props.stores.map(store => {
          return <Store modal_on={this.props.modal_on} store={store.name} address={store.address} low_in_stock={store.lowStock} distance={store.distance} />
        }
      )
    )
  }
}

export default Stores;