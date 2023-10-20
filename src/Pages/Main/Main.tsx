import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/useApp'
import { moveTo, clearField } from '../../store/fieldSlice'
import {
  changeTern,
  makeOver,
  setWinnerRow,
  reStart,
  setCompMove,
} from '../../store/gameSlice'
import { useCheckWinner } from '../../hooks/useCheckWinner'
import './Main.scss'
import { useCompMove } from '../../hooks/useCompMove'
import { Square } from '../../components/Square'

export const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const nowTern = useAppSelector((state) => state.game.nowTern)
  const isOver = useAppSelector((state) => state.game.isOver)
  const winnerRow = useAppSelector((state) => state.game.winnerRow)
  const isItPlayerMove = useAppSelector((state) => state.game.isItPlayerMove)
  const allSidesNames = Object.keys(
    useAppSelector((state) => state.field.gameField)
  )

  const result = useCheckWinner()

  useEffect(() => {
    if (result) {
      dispatch(makeOver(true))
      dispatch(setWinnerRow(result))
      console.log('use WINNER - ', result)
    }
  }, [result, dispatch])

  useEffect(() => {
    if (!isItPlayerMove) {
      //useCompMove()
    }
  }, [isItPlayerMove])

  function playerMove(obj: object) {
    dispatch(moveTo(obj))
    const nextTern = nowTern === 'X' ? 'O' : 'X'
    dispatch(changeTern(nextTern))
    //dispatch(setCompMove())
  }

  const start = () => {
    dispatch(clearField())
    dispatch(reStart())
  }

  return (
    <div className="Page">
      <div className="Page_topic">Крестики - нолики</div>
      {isOver ? (
        <div className="Page_description">ПОЗДРАВЛЯЕМ!!!</div>
      ) : (
        <div className="Page_description">Сейчас ходят '{nowTern}'</div>
      )}

      <button className="ChoisenBtn">Играть ноликами</button>
      <button className="ChoisenBtn" onClick={() => start()}>
        Начать заново
      </button>
      <div className="Page_field">
        {allSidesNames.map((sideName) => (
          <Square key={sideName} side={sideName} />
        ))}
      </div>
    </div>
  )
}
