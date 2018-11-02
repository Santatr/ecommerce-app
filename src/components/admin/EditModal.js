import React, { Component } from 'react';
import Modal from 'react-modal';
import { Button, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
 
Modal.setAppElement('#root')
 
class EditModal extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: false,
      productData: {
        name: this.props.product.name,
        photo: this.props.product.photo,
        types: this.props.product.types.join(','),
        price: this.props.product.price,
        stock: this.props.product.stock,
        ID: this.props.product.id,
        description: this.props.product.description,
        stars: this.props.product.stars
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
      photo: this.state.productData.photo,
      types: this.state.productData.types.split(','),
      price: Number(this.state.productData.price).toFixed(2),
      stock: Number(this.state.productData.stock),
      id: this.state.productData.ID,
      stars: this.props.product.stars,
      description: this.state.productData.description
    };
    this.props.onEditProduct(newItem);
    this.closeModal();
  }
 
  render() {
    return (
      <span>
        <Button bsSize="xsmall" bsStyle="warning" id={this.props.id} onClick={this.openModal}>Edit</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
 
          <h2>Edit Product</h2>
          <button className="close-btn" onClick={this.closeModal}>&times;</button>
          <Form horizontal onSubmit={this.handleSubmit}>         
            <FormControl 
              type="text" 
              name="name" 
              className="mt-input" 
              placeholder="Product Name" 
              value={this.state.productData.name}
              disabled={true}
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
                  disabled={true}
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
            <Button type="submit" bsSize="large" block bsStyle="success">Update</Button>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default EditModal;