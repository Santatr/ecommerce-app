import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row } from 'react-bootstrap';
import Product from './Product';

import '../../../node_modules/toastr/build/toastr.css';
import toastr from 'toastr';

import * as actions from '../../actions/actionCreators';

class productsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(e) {
    // find the item in list of available products
    const item = this.props.items.filter(item => item.id === e.target.id)[0];

    // add quantity, flavour and id of entry
    const payload = Object.assign({}, item, { quantity: 1, type: item.types[0], id: item.id + '-' + item.types[0] });

    // search if the item is already in cart
    let index, itemFromCart;
    this.props.itemsInCart.forEach((item, idx) => {
      if (item.id === payload.id) {
        itemFromCart = item;
        index = idx;
      }
    });

    // if it is instead of adding to cart dispatch only change in quantity
    if (itemFromCart) {
      this.props.dispatch(actions.changeProductQuantity(payload.id, itemFromCart.quantity + payload.quantity, index));
      toastr.success(`Your product was already in cart. Now you have ${itemFromCart.quantity + payload.quantity} items of this type. `, 'Success!');
      return;
    }

    this.props.dispatch(actions.addToCart(payload));
    this.props.dispatch(actions.changeStockNumber(payload.id.slice(0, 4), payload.quantity));
    toastr.success('Your product was added to cart.', 'Great!');
  }

  render() {
    return (
      <Row>
        {this.props.items.map(product => {
          return (
            <Product
              name={product.name}
              description={product.description}
              photo={product.photo}
              price={product.price}
              stars={product.stars}
              key={product.id}
              id={product.id}
              handleAddToCart={this.handleAddToCart}
              types={product.types}
            />
          );
        })}
      </Row>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    items: state.productsReducer,
    itemsInCart: state.cartReducer
  };
}

export default connect(mapStateToProps)(productsContainer);