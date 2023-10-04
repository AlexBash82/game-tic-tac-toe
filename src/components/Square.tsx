import React from 'react'
import './Square.scss'
import { useAppSelector, useAppDispatch } from '../hooks/useApp'
import { moveTo } from '../store/fieldSlice'
import { changeTern } from '../store/gameSlice'

interface SquareProps {
  side: string
}

export const Square: React.FC<SquareProps> = ({ side }) => {
  const dispatch = useAppDispatch()
  const nowTern = useAppSelector((state) => state.game.nowTern)
  const winnerRow = useAppSelector((state) => state.game.winnerRow)
  const isOver = useAppSelector((state) => state.game.isOver)
  const isDisable = useAppSelector((state) => state.field.gameField)[side]
    .disable
  const mySign = useAppSelector((state) => state.field.gameField)[side].sign

  function playerMove(obj: object) {
    dispatch(moveTo(obj))
    const nextTern = nowTern === 'X' ? 'O' : 'X'
    dispatch(changeTern(nextTern))
    //dispatch(setCompMove())
  }

  return (
    <div
      className={`Page_field_${side} Item`}
      onClick={() => playerMove({ [side]: { sign: nowTern, disable: true } })}
    >
      <button
        className={`Btn ${
          winnerRow.find((item) => item === side) ? 'Winner' : ''
        }`}
        disabled={isOver || isDisable}
      >
        {mySign}
      </button>
    </div>
  )
}
