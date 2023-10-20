import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MainState = {
  isOver: boolean
  winnerRow: string[]
  nowTern: string
  isItPlayerMove: boolean
}

const initialState: MainState = {
  isOver: false,
  winnerRow: [],
  nowTern: 'X',
  isItPlayerMove: true,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeOver(state, action: PayloadAction<boolean>) {
      state.isOver = action.payload
    },
    setWinnerRow(state, action: PayloadAction<string[]>) {
      state.winnerRow = action.payload
    },
    changeTern(state, action: PayloadAction<string>) {
      state.nowTern = action.payload
    },
    reStart(state) {
      state.isOver = false
      state.winnerRow = []
      state.nowTern = 'X'
    },
    setCompMove(state) {
      state.isItPlayerMove = false
    },
    setPlayerMove(state) {
      state.isItPlayerMove = true
    },
  },
})

export const {
  makeOver,
  setWinnerRow,
  changeTern,
  reStart,
  setCompMove,
  setPlayerMove,
} = gameSlice.actions
export default gameSlice.reducer
