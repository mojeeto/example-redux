import { createReducer } from "@reduxjs/toolkit";
import { setLoadingUsers } from "../action/Loading";

export default createReducer({ loadingUsers: true }, (builder) => {
  builder.addCase(setLoadingUsers, (state, { payload }) => ({
    ...state,
    loadingUsers: payload,
  }));
});
