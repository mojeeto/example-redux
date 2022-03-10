import { createReducer } from "@reduxjs/toolkit";
import { setUsers } from "../action/User";

export default createReducer([], (builder) => {
  builder.addCase(setUsers, (state, { payload }) => payload);
});
