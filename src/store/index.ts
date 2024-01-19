import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./slices/auth";
import topicReducer from "./slices/topics";
const store = configureStore({
    reducer: {
        auth: authReducer,
        topic: topicReducer
    }
})



export default store

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;