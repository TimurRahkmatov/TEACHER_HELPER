import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  auth: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerAuth(state, action) {
        state.auth = action.payload
    },
  },
});

export const { registerAuth } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
