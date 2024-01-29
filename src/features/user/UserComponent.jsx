import React, { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";

const Usercomponent = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

export default Usercomponent;
