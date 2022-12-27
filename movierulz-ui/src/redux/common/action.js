import { store } from "../setup/setUpStore";
import * as commonActionCreator from "./actionCreator";
import * as actionTypes from "./actionTypes";

export function changeActionViewMode(mode) {
  if (mode === actionTypes.LIGHT_MODE) {
    store.dispatch(commonActionCreator.enableDarkMode());
  } else {
    store.dispatch(commonActionCreator.enableLightMode());
  }
}
