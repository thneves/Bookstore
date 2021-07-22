import * as actions from '../actions/actionTypes';

const initialState = [
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    category: 'Mistery',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Clean Code',
    author: 'Uncle Bob',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    category: 'Drama',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Van Gogh',
    author: 'David Haziot',
    category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    category: 'Thriller',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [...state, action.payload];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
