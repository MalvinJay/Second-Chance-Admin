import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./UserSlicer/userSlice";

// Import reducers here...
const rootReducer = combineReducers({
  user: UserReducer,
  // customer: CustomerReducer,
});

export default rootReducer;
