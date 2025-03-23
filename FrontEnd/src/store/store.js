import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authReducer,
  },
});

export default store;
