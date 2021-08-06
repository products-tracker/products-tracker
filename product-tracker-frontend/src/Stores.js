import React from 'react';
import Store from './Store.js';
import './Stores.css';

class Stores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          {/* {this.props.stores.filter(store => store.lowInStock === 'In Stock').map(store => { */}
          {this.props.stores.map(store => {
              return (
                <div className="col-sm-4">
                  <Store modal_on={this.props.modal_on} store={store.store} address={store.address} low_in_stock={store.lowInStock} distance={store.distance} />
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}

export default Stores;