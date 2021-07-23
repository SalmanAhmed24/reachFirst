import { ADD_USERS, UPDATE_USERS, SEARCH_USERS } from "../actions/users";
import { AllUsers } from "../../Utils/constants";
const initialState = {
  allUsers: AllUsers,
  oldUsers: AllUsers,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    case UPDATE_USERS:
      return {
        ...state,
        oldUsers: [...action.payload],
      };
    default:
      return state;
  }
};
export default users;
