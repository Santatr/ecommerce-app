import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Table, Button } from 'react-bootstrap';
import AdminModal from './AdminModal';
import * as actions from '../../actions/actionCreators';
import toastr from 'toastr';
import EditModal from './EditModal';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleEditProduct = this.handleEditProduct.bind(this);
  }

  handleAddProduct(newItem) {
    this.props.dispatch(actions.addNewProduct(newItem));
    toastr.success('The new product was added in store.', 'Great!');
  }

  handleRemoveProduct(e) {
    this.props.dispatch(actions.removeProduct(e.target.id));
    toastr.success('The product was removed from store.', 'Success!');
  }

  handleEditProduct(newItem) {
    this.props.dispatch(actions.updateProduct(newItem.id, newItem));
    toastr.success(`Product ${newItem.name} was updated.`, 'Success!');
  }

  render() {
    return (
      <div>
        <h1>Admin Dashboard <Link className='btn btn-danger' to={'/logout'}>Sign Out</Link></h1>
        <Table hover>
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-right">Stock</th>
              <th className="text-right">Price</th>
              <th>Flavours</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((item, index) => (
              <tr key={item.id}>
                <td><Link to={`/product/${item.id}`}>{item.name}</Link></td>
                <td className="text-right">{item.stock}</td>
                <td className="price text-right">{item.price}</td>
                <td>{item.types.join(', ')}</td>
                <td>
                  <EditModal product={item} id={item.id} onEditProduct={this.handleEditProduct} />
                  <Button bsSize="xsmall" bsStyle="danger" id={item.id} onClick={this.handleRemoveProduct}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AdminModal onAddProduct={this.handleAddProduct} />
      </div>
    );
  }
  
}

function mapStateToProps(state, props) {
  return {
    products: state.productsReducer,
  };
}

export default connect(mapStateToProps)(Admin);