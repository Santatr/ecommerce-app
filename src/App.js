import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';
import './App.css';

import Header from './components/common/Header';
import Home from './components/common/Home';
import ProductsContainer from './components/products/ProductsContainer';
import ProductPage from './components/products/ProductPage';
import CartContainer from './components/cart/CartContainer';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Admin from './components/admin/Admin';
import Login from './components/admin/Login';
import Logout from './components/admin/Logout';
import Checkout from './components/checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <Row>
            <Header entries={this.props.entries} />
          </Row>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartContainer} />
          <ProtectedRoute path={'/admin'} component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/checkout" component={Checkout} />
        </Grid>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.productsReducer,
    entries: state.cartReducer.length,
  }
}

export default connect(mapStateToProps)(App);