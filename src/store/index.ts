import { configureStore } from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'

const store = configureStore({
  reducer: {
    main: fieldReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch