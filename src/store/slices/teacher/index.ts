import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  resources: [],
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    EditTeacherResources(state , action) {
        state.resources = action.payload
    }
  },
});

export const { EditTeacherResources } = teacherSlice.actions;

const teacherReducer = teacherSlice.reducer;

export default teacherReducer;
