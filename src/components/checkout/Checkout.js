import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, ProgressBar, Button, Radio } from 'react-bootstrap';
import OrderSummary from './OrderSummary';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      progress: 12
    };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    this.setState(prevState => ({ progress: prevState.progress + 8 }))
  }

  render() {
    return (
      <Row>
        <Col md={7}>
          <h2>Checkout</h2>
          <ProgressBar bsStyle="success" now={this.state.progress} />
          <CheckoutForm handleBlur={this.handleBlur} />
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          <OrderSummary />
        </Col>
      </Row>

    );
  }
};

export default Checkout;