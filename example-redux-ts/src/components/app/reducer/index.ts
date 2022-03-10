import { combineReducers } from "@reduxjs/toolkit";
import Loading from "./Loading";
import User from "./User";

export default combineReducers({
  users: User,
  loading: Loading,
});
