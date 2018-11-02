import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/actionCreators';

import { Row, Col, Image, Button, Form, ControlLabel, FormControl } from 'react-bootstrap';

import '../../../node_modules/toastr/build/toastr.css';
import toastr from 'toastr';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.product.types[0],
      quantity: 1,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleChange(e) {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...this.props.product,
      type: this.state.type,
      quantity: this.state.quantity,
      id: this.props.product.id + '-' + this.state.type
    };

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
      let newQuantity = Number(itemFromCart.quantity) + Number(payload.quantity);
      this.props.dispatch(actions.changeProductQuantity(payload.id, newQuantity, index));
      this.props.dispatch(actions.changeStockNumber(payload.id.slice(0, 4), payload.quantity));
      toastr.success(`Your product was already in cart. Now you have ${newQuantity} items of this type. `, 'Success!');
      return;
    }

    this.props.dispatch(actions.addToCart(payload));
    this.props.dispatch(actions.changeStockNumber(payload.id.slice(0, 4), payload.quantity));
    toastr.success('Your product was added to cart.', 'Great!');
  }

  handleVote(e) {
    console.log(`dispatching`, e.target.id);
    this.props.dispatch(actions.voteProduct(e.target.id));
  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <Image src={this.props.product.photo} responsive />
        </Col>
        <Col md={6}>
          <h2 className="display">{this.props.product.name}</h2>
          <h3 className="price">{this.props.product.price}</h3>
          <h4>Items in stock - {this.props.product.stock} </h4>
          <p>{this.props.product.description}</p>
          <p className="mb">It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
               distribution of letters, as opposed to using 'Content here, content here'. </p>

          <Form inline onSubmit={this.handleSubmit}>
            <ControlLabel>Choose product type&nbsp;&nbsp;</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="Select"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            >
              {this.props.product.types.map(type => <option value={type} key={this.props.product.id + type}>{type}</option>)}

            </FormControl>

            <ControlLabel className="ml">Choose quantity&nbsp;&nbsp;</ControlLabel>
            <FormControl
              type="number"
              min="1"
              max="50"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <Button type="submit" bsStyle="success" bsSize="large">Add to Cart</Button>
          </Form>
          <div className="votes-wrapper-page">
            <span><b>Vote this product</b></span>
            <button className="star" id={this.props.product.id} onClick={this.handleVote}>&#x02605;</button>
            <span className="votes"> {this.props.product.stars} </span>
          </div>
        </Col>
      </Row>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    items: state.productsReducer,
    itemsInCart: state.cartReducer,
    product: state.productsReducer.filter(item => item.id === props.match.params.id)[0]
  }
}

export default withRouter(connect(mapStateToProps)(ProductPage));