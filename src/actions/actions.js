import * as action from './actionTypes';

const addBook = (book) => ({
  type: action.ADD_BOOK,
  payload: book,
});

export default addBook;
