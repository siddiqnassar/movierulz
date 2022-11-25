import * as actionTypes from "./actionTypes";
const initialState = {
  loggedState: actionTypes.LOGGED_OUT,
  mode : actionTypes.LIGHT_MODE,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGGED_IN:
      return Object.assign({}, state, {
        loggedState: actionTypes.LOGGED_IN,
      });
    case actionTypes.DARK_MODE:
      return Object.assign({}, state, {
        mode: actionTypes.DARK_MODE,
      });
    case actionTypes.LIGHT_MODE:
      return Object.assign({}, state, {
        mode: actionTypes.LIGHT_MODE,
      });
    default:
      return state;
  }
}
