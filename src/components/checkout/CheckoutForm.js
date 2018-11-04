import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      city: '',
      country: '',
      address: '',
      shippingMethod: 'standard',
      cardNumber: '',
      expiryDay: '',
      expiryMonth: '',
      cvv: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  render() {
    console.log(this.state)
    return (
      <Form horizontal>
        <h4>Billing Address</h4>
        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            First Name
          </Col>
          <Col md={4}>
            <FormControl 
              type="text" 
              name="firstName" 
              value={this.state.firstName} 
              onChange={this.handleInputChange} 
              onBlur={this.handleBlur} 
            />
          </Col>
          <Col componentClass={ControlLabel} md={2}>
            Last Name
          </Col>
          <Col md={4}>
            <FormControl 
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur} 
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Email
          </Col>
          <Col md={4}>
            <FormControl 
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
          </Col>
          <Col componentClass={ControlLabel} md={2}>
            Telephone
          </Col>
          <Col md={4}>
            <FormControl
              type="text"
              name="telephone"
              value={this.state.telephone}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            City
          </Col>
          <Col md={4}>
            <FormControl 
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur} 
            />
          </Col>
          <Col componentClass={ControlLabel} md={2}>
            Country
          </Col>
          <Col md={4}>
            <FormControl 
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur} 
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Address
          </Col>
          <Col md={10}>
            <FormControl 
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
          </Col>
        </FormGroup>
        <hr />

        <h4>Delivery</h4>
        <FormGroup>
          <Col componentClass={ControlLabel} md={4}>
            Choose Shipping Method
          </Col>
          <Col md={8}>
            <FormGroup>
              <FormControl name="shippingMethod" checked={this.state.shippingMethod}>
                <input type="radio" value="standard" />
                <Radio name="shippingMethod">
                  Standard (1-4 weeks, no tracking)
              </Radio>{' '}
                <Radio name="shippingMethod" value="express">
                  Express (2-8 days, tracking)
              </Radio>{' '}
              </FormControl>            
            </FormGroup>
          </Col>
        </FormGroup>
        <hr />

        <h4>Payment Method</h4>
        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Card No
          </Col>
          <Col md={5}>
            <FormControl 
              type="number"
              min="16"
              max="18"
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Expiry Date
          </Col>
          <Col md={2}>
            <FormControl type="email" />
          </Col>
          <Col md={3}>
            <FormControl type="email" />
          </Col>
          <Col componentClass={ControlLabel} md={2}>
            CVV
          </Col>
          <Col md={2}>
            <FormControl type="text" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default CheckoutForm;