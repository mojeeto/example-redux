import { setUsers } from "./../action/User";
import { createReducer } from "@reduxjs/toolkit";
import { Users } from "../action/User";

export default createReducer([] as Users[], (builder) => {
  builder.addCase(setUsers, (_, action) => action.payload);
});
