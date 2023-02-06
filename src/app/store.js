import { configureStore } from '@reduxjs/toolkit';
import gainersReducer from '../features/gainers/gainersSlice';

const store = configureStore({
  reducer: {
    gainers: gainersReducer,
  },
});

export default store;
