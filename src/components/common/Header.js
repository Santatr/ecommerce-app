import React from 'react';
import { Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = (props) => {
  return (
    <header className="app-header">
      <Link to="/" className="thumb-link"><img src={logo} className="app-logo" alt="logo" /></Link>
      <nav>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/cart">Your cart </Link>
        {props.entries > 0 &&  <Label bsStyle="success">{props.entries}</Label>} 
        <Link className="nav-link" to="/admin">Admin </Link>
      </nav>
    </header>
  );
};

export default Header;