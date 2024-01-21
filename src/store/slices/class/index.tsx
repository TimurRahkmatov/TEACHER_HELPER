import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  classes: [],
};

const classSlices = createSlice({
  name: "class",
  initialState,
  reducers: {
    EditClass(state , action) {
        state.classes = action.payload
    }
  },
});

export const { EditClass } = classSlices.actions;

const classReducer = classSlices.reducer;

export default classReducer;
