import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./app/action/User";

const Users = () => {
  const { users, loading } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ul>
      {!loading.loadingUsers ? (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
};

export default Users;
