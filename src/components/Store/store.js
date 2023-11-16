import { configureStore } from "@reduxjs/toolkit";
import emailSlice from "../Slices/emailSlice";
import userSlice from "../Slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    email : emailSlice.reducer,
  },
});

export default store;
