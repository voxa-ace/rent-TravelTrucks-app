// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/campersSlice';  // Імпорт редюсера

export const store = configureStore({
  reducer: {
    campers: campersReducer,  // Додаємо редюсер до store
  },
});
