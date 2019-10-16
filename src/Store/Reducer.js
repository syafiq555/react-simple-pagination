import {
  SET_DATA, SET_CURRENT_DATA, SET_ACTIVE_PAGE, INCREMENT_PAGE, DECREMENT_PAGE,
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_CURRENT_DATA:
      return {
        ...state,
        currData: action.payload,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        activePage: state.activePage + 1,
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        activePage: state.activePage - 1,
      };
    default:
      return state;
  }
};
