import { setLoadingUsers } from "./../action/Loading";
import { createReducer } from "@reduxjs/toolkit";
export default createReducer(
  { loadingUser: true } as { loadingUser: boolean },
  (builder) => {
    builder.addCase(setLoadingUsers, (_, { payload }) => ({
      loadingUser: payload,
    }));
  }
);
