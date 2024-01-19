import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  topics: [],
};

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    EditTopisc(state , action) {
        state.topics = action.payload
    }
  },
});

export const { EditTopisc } = topicSlice.actions;

const topicReducer = topicSlice.reducer;

export default topicReducer;
