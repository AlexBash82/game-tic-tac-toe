import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

type MainState = {
  gameField: FieldState
}

type FieldState = {
  one: {sign: string | null, disable: boolean},
  two: {sign: string | null, disable: boolean},
  three: {sign: string | null, disable: boolean},
  four: {sign: string | null, disable: boolean},
  five: {sign: string | null, disable: boolean},
  six: {sign: string | null, disable: boolean},
  seven: {sign: string | null, disable: boolean},
  eight: {sign: string | null, disable: boolean},
  nine: {sign: string | null, disable: boolean},
}

const initialState: MainState = {
  gameField: { 
    one: {sign: null, disable: false},
    two: {sign: null, disable: false},
    three: {sign: null, disable: false},
    four: {sign: null, disable: false},
    five: {sign: null, disable: false},
    six: {sign: null, disable: false},
    seven: {sign: null, disable: false},
    eight: {sign: null, disable: false},
    nine: {sign: null, disable: false},
  } 
} 

const fieldSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    moveTo(state, action: PayloadAction<object>){
      state.gameField = {...state.gameField, ...action.payload}
    }
  }
})

export const {moveTo} = fieldSlice.actions
export default fieldSlice.reducer