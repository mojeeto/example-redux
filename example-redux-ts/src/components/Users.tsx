import React, { useEffect } from "react";
import { getUsers } from "./app/action/User";
import { useAppDispatch, useAppSelector } from "./app/hooks";

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((s) => s);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ul>
      {!loading.loadingUser ? (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
};

export default Users;
