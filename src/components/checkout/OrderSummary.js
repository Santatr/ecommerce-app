import React from 'react';
import { Panel } from 'react-bootstrap';

const OrderSummary = (props) => {
  return (
    <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Order Summary</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
  );
}

export default OrderSummary;