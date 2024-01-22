import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  resources: [],
};

const moderatoSlice = createSlice({
  name: "moderator",
  initialState,
  reducers: {
    EditModeratorResource(state , action) {
        state.resources = action.payload
    }
  },
});

export const { EditModeratorResource } = moderatoSlice.actions;

const moderatorReducer = moderatoSlice.reducer;

export default moderatorReducer;
