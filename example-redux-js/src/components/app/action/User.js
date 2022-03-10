import { createAction } from "@reduxjs/toolkit";
import { setLoading } from "./Loading";

export const setUsers = createAction("USERS");

export const getUsers = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        dispatch(setUsers(data));
        dispatch(setLoading("users", false));
      }, 5000);
    })
    .catch((err) => console.log(err));
};
