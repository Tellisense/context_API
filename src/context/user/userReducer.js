import { SET_USERS, SET_USER, SET_API_USERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_API_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
