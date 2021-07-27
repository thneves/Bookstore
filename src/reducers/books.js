import * as actions from '../actions/actionTypes';

const booksInitialState = [{
  id: Math.floor(Math.random() * 1002323) + 1,
  title: '',
  author: '',
  category: '',
}];

const bookReducer = (state = booksInitialState, action) => {
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
