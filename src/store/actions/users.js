export const ADD_USERS = "ADD_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

export const addUsers = (user) => ({ type: ADD_USERS, payload: user });
export const updateOldUser = (user) => ({ type: UPDATE_USERS, payload: user });
