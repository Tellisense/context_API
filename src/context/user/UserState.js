import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_USERS, SET_USER, SET_API_USERS } from "../types";

const apiEndPoint = "https://jsonplaceholder.typicode.com/users";

const UserState = props => {
  const initialState = {
    user: "",
    users: []
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // set API Users
  const setApiUsers = async () => {
    const { data } = await axios.get(apiEndPoint);

    const usersArray = data.map(user => user.name);
    dispatch({ type: SET_API_USERS, payload: usersArray });
  };

  // set user
  const setUser = payload => {
    dispatch({
      type: SET_USER,
      payload
    });
  };

  // set users
  const setUsers = payload => {
    dispatch({
      type: SET_USERS,
      payload
    });
  };

  return (
    <UserContext.provider
      value={{
        user: state.user,
        users: state.users,
        setUsers,
        setUser,
        setApiUsers
      }}
    >
      {props.children}
    </UserContext.provider>
  );
};

export default UserState;
