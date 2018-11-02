import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <Col sm={6} md={4}>
      <Link to={`/product/${props.id}`} className="thumb-link">
        <Thumbnail src={props.photo} alt="product-photo">
          <h3 className="text-center"> {props.name} </h3>
          <p> {props.description} </p>
          <div className="product-info">
            <div className="price"> {props.price} </div>
            <div className="votes-wrapper">
              <button className="star">&#x02605;</button>
              <span className="votes"> {props.stars} </span>
            </div>
          </div>
        </Thumbnail>
      </Link>
      <Button bsStyle="success" bsSize="large" onClick={props.handleAddToCart} id={props.id}>Add to Cart</Button>
    </Col>
  );
};

export default Product;
