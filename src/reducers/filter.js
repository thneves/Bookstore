import { CHANGE_FILTER } from "../actions/actionTypes";

const filterState = ['All', 'Action', 'Biography', 'Mistery', 'Sci-Fi', 'Drama', 'Learning']

const filterReducer = (state = filterState, action) => {
    switch(action.type) {
      case CHANGE_FILTER:
        return state.filter(category => category === action.payload.category)
      default:
        return state
    }
}

export default filterReducer;