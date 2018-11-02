import * as types from '../actions/actionTypes';
import { products } from '../utils/initialState';

function productsReducer(state = products, action) {
  // search for item to modify
  let itemToModify, index;
  if (action.id) {
    state.forEach((item, idx) => {
      if (item.id === action.id) {
        itemToModify = item;
        index = idx;
      }
    });
  }

  switch (action.type) {
    case types.ADD_NEW_PRODUCT:
      return [
        ...state, action.newItem
      ];

    case types.REMOVE_PRODUCT:
      return [
        ...state.filter(item => item.id !== action.id),
      ];

    case types.UPDATE_PRODUCT:
      return [
        ...state.filter((item, idx) => item.id !== action.id && idx < index),
        { ...action.newData },
        ...state.filter((item, idx) => item.id !== action.id && idx > index)
      ];

    case types.VOTE_PRODUCT:
      return [
        ...state.filter((item, idx) => item.id !== action.id && idx < index),
        Object.assign({}, itemToModify, { stars: itemToModify.stars + 1 }),
        ...state.filter((item, idx) => item.id !== action.id && idx > index)
      ];

    case types.CHANGE_STOCK_NUMBER:
      return [
        ...state.filter((item, idx) => item.id !== action.id && idx < index),
        Object.assign({}, itemToModify, { stock: itemToModify.stock - action.quantity }),
        ...state.filter((item, idx) => item.id !== action.id && idx > index)
      ];


    default:
      return state;
  }
}

export default productsReducer;
