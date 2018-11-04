import React, { Component } from 'react';
import authService from '../../utils/authService';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import toastr from 'toastr';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: authService.isAuthenticated(),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  render = () => {

    const { target } = this.props.location.state || { target: { pathname: '/admin' } };

    if (this.state.loggedIn) {
      return <Redirect to={target} />;
    }

    return (
      <div className="login-box">
        <h1>Sign In</h1>

        <Form horizontal={true}>
          <FormGroup>

            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="string"
              placeholder="Email"
              size={{ length: 40 }}
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />

            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              length={'40px'}
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />

            <Button className='btn btn-success mt' block onClick={this.login}>Sign in</Button>
          </FormGroup>
        </Form>
      </div>
    );
  };

  login = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    authService.signIn(data, () => {
      this.setState({
        loggedIn: authService.isAuthenticated(),
      }, () => {
        if(!this.state.loggedIn) toastr.error('There was a problem with your login. Check email or password.');
        else toastr.success('You are now logged in.', 'Success!');
      })
    })
  };
}

export default Login;