const { createAction } = require("@reduxjs/toolkit");

export const setLoadingUsers = createAction("LOADING_USERS");

export const setLoading = (which, value) => (dispatch) => {
  switch (which) {
    case "users":
      dispatch(setLoadingUsers(value));
      break;
    default:
      break;
  }
};
