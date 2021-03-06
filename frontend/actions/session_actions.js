import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => (
  APISessionUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(currentUser))
    ), error =>  (dispatch(receiveErrors(error.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  APISessionUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APISessionUtil.signup(user).then(Currentuser =>
    (dispatch(receiveCurrentUser(Currentuser))
  ), error =>  (dispatch(receiveErrors(error.responseJSON))
  ))
);

// export const logout = ()
