import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FieldState {
  [key: string]: { sign: string | null; disable: boolean }
}

type MainState = {
  gameField: FieldState
}

// const sideNW = { name: 'sideNW', sign: null, disable: false }
// const sideN = { name: 'sideN', sign: null, disable: false }
// const sideNE = { name: 'sideNE', sign: null, disable: false }
// const sideW = { name: 'sideW', sign: null, disable: false }
// const sideM = { name: 'sideM', sign: null, disable: false }
// const sideE = { name: 'sideE', sign: null, disable: false }
// const sideSW = { name: 'sideSW', sign: null, disable: false }
// const sideS = { name: 'sideS', sign: null, disable: false }
// const sideSE = { name: 'sideSE', sign: null, disable: false }

// const sideNW = { sign: null, disable: false }
// const sideN = { sign: null, disable: false }
// const sideNE = { sign: null, disable: false }
// const sideW = { sign: null, disable: false }
// const sideM = { sign: null, disable: false }
// const sideE = { sign: null, disable: false }
// const sideSW = { sign: null, disable: false }
// const sideS = { sign: null, disable: false }
// const sideSE = { sign: null, disable: false }

const initialState: MainState = {
  gameField: {
    sideNW: { sign: null, disable: false },
    sideN: { sign: null, disable: false },
    sideNE: { sign: null, disable: false },
    sideW: { sign: null, disable: false },
    sideM: { sign: null, disable: false },
    sideE: { sign: null, disable: false },
    sideSW: { sign: null, disable: false },
    sideS: { sign: null, disable: false },
    sideSE: { sign: null, disable: false },
  },
}

const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    moveTo(state, action: PayloadAction<object>) {
      state.gameField = { ...state.gameField, ...action.payload }
    },
    clearField(state) {
      state.gameField = initialState.gameField
    },
  },
})

export const { moveTo, clearField } = fieldSlice.actions
export default fieldSlice.reducer
