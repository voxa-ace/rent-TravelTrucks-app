import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    bodyType: '',
    features: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBodyType: (state, action) => {
      state.bodyType = action.payload;
    },
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
  },
});

export const { setLocation, setBodyType, setFeatures } = filtersSlice.actions;
export default filtersSlice.reducer;
