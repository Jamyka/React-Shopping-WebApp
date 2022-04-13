import counterReducer from "./counterReducer";
import usersReducer from "./usersReducer";

import { combineReducers } from "redux";

export default combineReducers({
  counter: counterReducer,
  usersList: usersReducer,
});
