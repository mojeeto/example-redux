import { createAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../app";
import { setLoading } from "./Loading";

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const setUsers = createAction<Users[]>("USERS");

export const getUsers = () => (dispatch: AppDispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUsers(data));
      dispatch(setLoading("users", false));
    })
    .catch((err) => console.log(err));
};
