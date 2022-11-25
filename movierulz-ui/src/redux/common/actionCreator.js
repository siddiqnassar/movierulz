import * as actionTypes from "./actionTypes";
export const userLoggedIn = () => {
  return {
    type: actionTypes.LOGGED_IN,
  };
};

export const userLoggedOut = () => {
  return {
    type: actionTypes.LOGGED_OUT,
  };
};

export const enableDarkMode = () => {
  return {
    type: actionTypes.DARK_MODE,
  };
};


export const enableLightMode = () => {
  return {
    type: actionTypes.LIGHT_MODE,
  };
};
