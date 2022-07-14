import { combineReducers } from "@reduxjs/toolkit";
import { DataSlice } from "../slices/user-slice";

const rootReducer = combineReducers({
  user: DataSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;