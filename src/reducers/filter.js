import { CHANGE_FILTER } from '../actions/actionTypes';

const filterInitialState = 'All';

const filterReducer = (state = filterInitialState, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_FILTER:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
