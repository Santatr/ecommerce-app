import React, { Component } from 'react';
import Modal from 'react-modal';
import { Button, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
 
Modal.setAppElement('#root')
 
class AdminModal extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      productData: {
        name: '',
        photo: '',
        types: '',
        price: null,
        stock: null,
        ID: '',
        description: ''
      }
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleInputChange(e) {
    let key = e.target.name;
    this.setState({
      productData: {...this.state.productData, [key]: e.target.value}
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      name: this.state.productData.name,
      phpto: this.state.productData.photo,
      types: this.state.productData.types.split(','),
      price: Number(this.state.productData.price).toFixed(2),
      stock: Number(this.state.productData.stock),
      id: this.state.productData.ID,
      stars: 0,
      description: this.state.productData.description
    };
    this.props.onAddProduct(newItem);
    this.closeModal();
  }
 
  render() {
    return (
      <div>
        <Button bsSize="large" bsStyle="success" onClick={this.openModal}>Add Product</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
 
          <h2>Add New Product</h2>
          <button className="close-btn" onClick={this.closeModal}>&times;</button>
          <Form horizontal onSubmit={this.handleSubmit}>         
            <FormControl 
              type="text" 
              name="name" 
              className="mt-input" 
              placeholder="Product Name" 
              value={this.state.productData.name} 
              onChange={this.handleInputChange} 
            />
            <FormControl 
              type="text" 
              name="link" 
              className="mt-input" 
              placeholder="Photo Link" 
              value={this.state.productData.link}
              onChange={this.handleInputChange} 
            />
            <FormControl 
              type="text" 
              name="types" 
              className="mt-input" 
              placeholder="Product types separated by comma" 
              value={this.state.productData.types}
              onChange={this.handleInputChange} 
            />

            <FormGroup className="mt-input">
              <Col sm={4}>
                <FormControl 
                  type="number" 
                  name="price" 
                  placeholder="Price" 
                  value={this.state.productData.price}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col sm={4}>
                <FormControl 
                  type="number" 
                  name="stock" 
                  placeholder="Stock" 
                  value={this.state.productData.stock}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col sm={4}>
                <FormControl 
                  type="text" 
                  name="ID" 
                  placeholder="ID" 
                  value={this.state.productData.ID}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormControl 
              componentClass="textarea" 
              name="description" 
              rows="8" 
              placeholder="Product Description" 
              value={this.state.productData.description}
              onChange={this.handleInputChange}
            />
            <Button type="submit" bsSize="large" block bsStyle="success">Submit</Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AdminModal;