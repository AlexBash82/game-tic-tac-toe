import { configureStore } from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'
import gameReducer from "./gameSlice";

const store = configureStore({
  reducer: {
    field: fieldReducer,
    game: gameReducer,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch