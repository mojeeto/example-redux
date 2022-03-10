import { AppDispatch } from "./../app";
import { createAction } from "@reduxjs/toolkit";

export const setLoadingUsers = createAction<boolean>("LOADING_USERS");

export const setLoading =
  (which: string, value: boolean) => (dispatch: AppDispatch) => {
    switch (which) {
      case "users":
        dispatch(setLoadingUsers(value));
        break;
      default:
        break;
    }
  };
