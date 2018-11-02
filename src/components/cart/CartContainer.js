import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row } from 'react-bootstrap';
import Cart from './Cart';

import * as actions from '../../actions/actionCreators';

import toastr from 'toastr';
toastr.options.preventDuplicates = true;

class cartContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCounterChange = this.handleCounterChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleCounterChange(id, value, index) {
    this.props.dispatch(actions.changeProductQuantity(id, value, index));
  }

  handleRemove(id) {
    this.props.dispatch(actions.removeFromCart(id));
    toastr.success('Your product was removed from cart.', 'Success!');
  }

  render() {
    return (
      <Row>
        <Cart
          items={this.props.itemsInCart}
          noOfItems={this.props.noOfItems}
          handleCounterChange={this.handleCounterChange}
          subtotals={this.props.subtotals}
          total={this.props.total}
          handleRemove={this.handleRemove}
        />
      </Row>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    itemsInCart: state.cartReducer,
    noOfItems: state.cartReducer.reduce((acc, item) => Number(item.quantity) + acc, 0),
    subtotals: state.cartReducer.map(item => (item.price * item.quantity).toFixed(2)),
    total: state.cartReducer.map(item => (item.price * item.quantity)).reduce((acc, subtotal) => subtotal + acc, 0).toFixed(2),
  };
}

export default connect(mapStateToProps)(cartContainer);