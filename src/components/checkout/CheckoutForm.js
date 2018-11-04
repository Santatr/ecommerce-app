import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import { months } from '../../utils/constants';

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
      expiryYear: '',
      expiryMonth: '',
      cvv: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {...this.state};
    console.log(payload);
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
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
              onBlur={this.props.handleBlur} 
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
              onBlur={this.props.handleBlur} 
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
              onBlur={this.props.handleBlur}
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
              onBlur={this.props.handleBlur}
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
              onBlur={this.props.handleBlur} 
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
              onBlur={this.props.handleBlur} 
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
              onBlur={this.props.handleBlur}
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
              <Radio 
                name="shippingMethod" 
                value="standard" 
                checked={this.state.shippingMethod === 'standard'}
                onChange={this.handleInputChange}
              >
                Standard (1-4 weeks, no tracking)
              </Radio>{' '}
              <Radio 
                name="shippingMethod" 
                value="express" 
                checked={this.state.shippingMethod === 'express'}
                onChange={this.handleInputChange}
              >
                Express (2-8 days, tracking)
              </Radio>{' '}        
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
              type="text"
              pattern="/^[0-9]{16}$/"
              name="cardNumber"
              title="Valid card number 4444 4444 4444 4444"
              value={this.state.cardNumber}
              onChange={this.handleInputChange}
              onBlur={this.props.handleBlur}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Expiry Date
          </Col>
          <Col md={3}>
            <FormControl
                componentClass="select"
                placeholder="Month"
                name="expiryMonth"
                value={this.state.expiryMonth}
                onChange={this.handleInputChange}
              >
              {months.map((month, index) => <option value={month} key={index}>{month}</option>)}

            </FormControl>
          </Col>
          
          <Col md={2}>
            <FormControl 
              type="number"
              name="expiryYear"
              placeholder="Year" 
              min="2018" 
              max="2050"
              maxLength="4"
              value={this.state.expiryYear}
              onChange={this.handleInputChange}
              onBlur={this.props.handleBlur}
            />
          </Col>
          <Col componentClass={ControlLabel} md={2}>
            CVV
          </Col>
          <Col md={2}>
            <FormControl 
              type="number"
              name="cvv"
              maxLength="3"
              value={this.state.cvv}
              onChange={this.handleInputChange}
              onBlur={this.props.handleBlur}
            />
          </Col>
        </FormGroup>
        <Button bsStyle="success" bsSize="large" type="submit">Place Order</Button>
      </Form>
    );
  }
}

export default CheckoutForm;