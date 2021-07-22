import * as actions from './actionTypes';

const createBook = (book) => ({
  type: actions.CREATE_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: actions.REMOVE_BOOK,
  payload: book,
});

const changeFilter = (book) => ({
  type: actions.CHANGE_FILTER,
  payload: book,
});

export { createBook, removeBook, changeFilter };
