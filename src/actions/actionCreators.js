import * as types from './actionTypes';

// CART
export function addToCart(itemToAdd) {
  return {
    type: types.ADD_TO_CART,
    item: itemToAdd
  }
}

export function removeFromCart(itemId) {
  return {
    type: types.REMOVE_FROM_CART,
    id: itemId
  }
}

export function changeProductQuantity(id, quantity, index) {
  return {
    type: types.CHANGE_PRODUCT_QUANTITY,
    id: id,
    quantity: quantity,
    index: index
  }
}

// PRODUCT
export function voteProduct(id) {
  return {
    type: types.VOTE_PRODUCT,
    id: id
  }
}

export function changeStockNumber(id, quantity) {
  return {
    type: types.CHANGE_STOCK_NUMBER,
    id: id,
    quantity: quantity
  }
}

// ADMIN
export function addNewProduct(newItem) {
  return {
    type: types.ADD_NEW_PRODUCT,
    newItem: newItem
  }
}

export function removeProduct(id) {
  return {
    type: types.REMOVE_PRODUCT,
    id: id
  }
}

export function updateProduct(id, newData) {
  return {
    type: types.UPDATE_PRODUCT,
    newData: newData,
    id: id
  }
}
