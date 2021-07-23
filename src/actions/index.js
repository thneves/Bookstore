import * as actions from './actionTypes';

const createBook = (book) => ({
  type: actions.CREATE_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: actions.REMOVE_BOOK,
  payload: book,
});

const changeFilter = (category) => ({
  type: actions.CHANGE_FILTER,
  payload: category,
});

export { createBook, removeBook, changeFilter };
