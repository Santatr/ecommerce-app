import * as types from '../actions/actionTypes';

const products = [
  {
    name: 'Hair Moisture Cream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    photo: 'https://preview.ibb.co/dR4r6V/photo1.jpg',
    price: '11.80',
    stars: 8,
    id: '0001',
    types: ['Coconut', 'Olive oil', 'Keratin'],
    stock: 50
  },
  {
    name: 'Cocooil Body',
    description: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
    photo: 'https://preview.ibb.co/iWLW6V/photo2.jpg',
    price: '9.20',
    stars: 15,
    id: '0002',
    types: ['Mango', 'Avocado', 'Shea Butter'],
    stock: 50
  },
  {
    name: 'Neked Nail Oil',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
    photo: 'https://preview.ibb.co/kanTmV/photo3.jpg',
    price: '10.50',
    stars: 4,
    id: '0003',
    types: ['Olive oil', 'Roses'],
    stock: 60
  },
  {
    name: 'Long Living Essential Oil',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    photo: 'https://preview.ibb.co/k9cfYA/photo4.jpg',
    price: '5.00',
    stars: 32,
    id: '0004',
    types: ['Tranquil', 'Energy', 'Lavander', 'Mint', 'Flowers'],
    stock: 150
  },
  {
    name: 'Hannya Face Cream',
    description: ' If you are going to use a passage you need to be sure there is anything hidden in the middle of text.',
    photo: 'https://preview.ibb.co/b7NHwV/photo5.jpg',
    price: '19.90',
    stars: 16,
    id: '0005',
    types: ['Sensible skin', 'Rich hydration', 'Anti-age', 'All skin'],
    stock: 30
  },
  {
    name: 'Amazonian Lip Balm',
    description: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
    photo: 'https://preview.ibb.co/iWLW6V/photo2.jpg',
    price: '6.50',
    stars: 1,
    id: '0006',
    types: ['Fruit Mix', 'Cherry', 'Shea Butter', 'Coconut'],
    stock: 50
  },
  {
    name: 'Japanese Pack',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
    photo: 'https://preview.ibb.co/kanTmV/photo3.jpg',
    price: '20.00',
    stars: 14,
    id: '0007',
    types: ['Fruit Mix', 'Flower Story'],
    stock: 15
  }
];

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
