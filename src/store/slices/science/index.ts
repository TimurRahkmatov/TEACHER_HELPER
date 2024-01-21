import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  sciences: [],
};

const scienceSlices = createSlice({
  name: "science",
  initialState,
  reducers: {
    EditScience(state , action) {
        state.sciences = action.payload
    }
  },
});

export const { EditScience } = scienceSlices.actions;

const scienceReducer = scienceSlices.reducer;

export default scienceReducer;
