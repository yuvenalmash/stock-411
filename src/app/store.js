import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from '../features/homepage/homepageSlice';

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});

export default store;
