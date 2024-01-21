import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./slices/auth";
import topicReducer from "./slices/topics";
import classReducer from "./slices/class";
import scienceReducer from "./slices/science";
const store = configureStore({
  reducer: {
    auth: authReducer,
    topic: topicReducer,
    class: classReducer,
    science: scienceReducer
    
  },
});

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
