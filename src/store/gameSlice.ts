import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

type MainState = {
  isOver: boolean,
  winnerRow: number[],
  nowTern: string,
}

const initialState: MainState = {
  isOver: false,
  winnerRow: [],
  nowTern: 'X',
} 

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeOver(state, action: PayloadAction<boolean>) {
      state.isOver = action.payload
    },
    setWinnerRow(state, action: PayloadAction<number[]>) {
      state.winnerRow = action.payload
    },
    changeTern(state, action: PayloadAction<string>) {
      state.nowTern = action.payload
    }
  }
})

export const { makeOver, setWinnerRow, changeTern } = gameSlice.actions
export default gameSlice.reducer