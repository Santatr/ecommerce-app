import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid>
          <Row>
            <Header entries={this.props.entries} />
          </Row>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/products" component={productsContainer} />
          <Route path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={cartContainer} />

          <ProtectedRoute path={'/admin'} component={Admin} />
          <Route path={'/login'} component={Login} />
          <Route path={'/logout'} component={Logout} />
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