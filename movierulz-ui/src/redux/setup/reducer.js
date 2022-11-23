import * as actionTypes from "./actionTypes";
const initialState = {
  mode: "lightmode",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DARK_MODE:
      return Object.assign({}, state, {
        mode: "darkmode",
      });
    case actionTypes.LIGHT_MODE:
      return Object.assign({}, state, {
        mode: "lightmode",
      });
    default:
      return Object.assign({}, state, {
        mode: "lightmode",
      });
  }
}
