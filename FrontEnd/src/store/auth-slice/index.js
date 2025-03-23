import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  insAutehnticated: false,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
        setUser: (state, action) => {
        }
        
    }});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;