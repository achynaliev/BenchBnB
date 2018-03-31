import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from "lodash/merge";

const _nullState = {
  session: []
};

export const sessionReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
    console.log(action.errors);
      return action.errors
    default:
      return state;
  }
};
