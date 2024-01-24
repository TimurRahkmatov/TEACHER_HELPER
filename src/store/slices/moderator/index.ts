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
    },
    DeleteResource(state , action) {
      state.resources = state.resources.filter(
        (item:any) => item?.id !== action.payload
      );
    },
    CreateResource(state , action) {
      state.resources.push(action.payload)
    } 
  },
});

export const { EditModeratorResource , DeleteResource , CreateResource  } = moderatoSlice.actions;

const moderatorReducer = moderatoSlice.reducer;

export default moderatorReducer;
