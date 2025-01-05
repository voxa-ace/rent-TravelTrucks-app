import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer, // Додаємо редюсер до store
  },
});
