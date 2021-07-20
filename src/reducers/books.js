import * as actions from '../actions/actionTypes';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [...state, action.payload];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
