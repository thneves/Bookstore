import * as actions from '../actions/actionTypes';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [...state, action.payload.book];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book !== action.payload.book);
    default:
      return state;
  }
};

export default bookReducer;
