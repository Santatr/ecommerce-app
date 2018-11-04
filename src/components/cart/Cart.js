import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Table, FormControl } from 'react-bootstrap';

const Cart = (props) => {
  return (
    <Col md={8}>
      <h2 className="mb">Shopping Bag - {props.noOfItems} items</h2>
      <Table hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Flavour</th>
            <th>Quantity</th>
            <th className="text-right">Item Price</th>
            <th className="text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <tr key={item.id}>
              <td><Link to={`/product/${item.id.slice(0, 4)}`}>{item.name}</Link></td>
              <td>{item.type}</td>
              <td>
                <FormControl
                  type="number"
                  min="1"
                  max="50"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => props.handleCounterChange(e.target.id, e.target.value, index)}
                  key={item.id + item.type}
                  id={item.id}
                />
              </td>
              <td className="price text-right">{item.price}</td>
              <td className="price text-right">{props.subtotals[index]}</td>
              <td className="no-border"><Button bsSize="xsmall" bsStyle="danger" id={item.id} onClick={(e) => props.handleRemove(e.target.id)}>Remove</Button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-bold">Total</td>
            <td className="price text-right text-bold">{props.total}</td>
          </tr>
        </tfoot>
      </Table>
      <Button href="/checkout" bsSize="large" bsStyle="success">Procced to Checkout</Button>
    </Col>
  );
}

export default Cart;