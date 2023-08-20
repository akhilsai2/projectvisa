import { configureStore } from "@reduxjs/toolkit";
import globalstate from "./globalstate";

const store = configureStore({
  reducer: {
    globalstate: globalstate,
  },
});
export default store;
