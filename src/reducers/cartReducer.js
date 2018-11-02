import * as types from '../actions/actionTypes';

const itemsInCart = [];

function cartReducer(state = itemsInCart, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      return [
        ...state, action.item
      ];
    
    case types.REMOVE_FROM_CART:
      return [
        ...state.filter(item => item.id !== action.id)
      ];

    case types.CHANGE_PRODUCT_QUANTITY:
      let itemTochange = state.filter(item => item.id === action.id)[0];
      return [
        ...state.filter((item, index) => item.id !== action.id && index < action.index),
        Object.assign({}, itemTochange, { quantity: action.quantity}),
        ...state.filter((item, index) => item.id !== action.id && index > action.index)
      ];

    default:
      return state;
  }
}

export default cartReducer;