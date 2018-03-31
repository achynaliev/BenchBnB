import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from "lodash/merge";

const _nullState = {
  currentUser: null
};

export const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser }); 
    default:
      return state;
  }
};
