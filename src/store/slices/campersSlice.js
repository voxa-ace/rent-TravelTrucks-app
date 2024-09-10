// src/store/slices/campersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронний екшен для завантаження списку campers
export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
  const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
  return response.data;
});

// Асинхронний екшен для завантаження одного camper за id
export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (id) => {
  const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
  return response.data;
});

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campersList: [],
    camperDetail: null,  // Додаємо стан для одного camper
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.campersList = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Обробляємо стан для fetchCamperById
      .addCase(fetchCamperById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.camperDetail = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
