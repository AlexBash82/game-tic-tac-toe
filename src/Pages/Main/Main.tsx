import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hook'
import { moveTo } from '../../store/fieldSlice'
import { changeTern } from '../../store/gameSlice'
import { useCheckWinner } from '../../checkWinner'
import './Main.scss'

export const Main: React.FC = () => {

  const dispatch = useAppDispatch()
  const { one, two, three, four, five, six, seven, eight, nine } = useAppSelector(state => state.field.gameField)
  const nowTern = useAppSelector(state => state.game.nowTern)
  

  const result = useCheckWinner()  

  if(result) {
    console.log('use WINNER - ', result)
  }


  function playerMove(obj: object) {
    dispatch(moveTo(obj))
    const nextTern = (nowTern === 'X') ? 'O' : 'X'
    dispatch(changeTern(nextTern))
  }

  return (
    <div className='Page'>
      <div className='Page_topic'>Крестики - нолики</div>
      <div className='Page_description'>Сейчас ходят '{nowTern}'</div>
      <button className='ChoisenBtn'>Играть ноликами</button>
      <button className='ChoisenBtn'>Начать заново</button>
      <div className='Page_field'>
        <div className='Page_field_one Item' onClick={() => playerMove({one: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={one.disable}
          >{one.sign}</button>
        </div>
        <div className='Page_field_two Item' onClick={() => playerMove({two: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={two.disable}
          >{two.sign}</button>
        </div>
        <div className='Page_field_three Item' onClick={() => playerMove({three: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={three.disable}
          >{three.sign}</button>
        </div>
        <div className='Page_field_four Item' onClick={() => playerMove({four: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={four.disable}
          >{four.sign}</button>
        </div>
        <div className='Page_field_five Item' onClick={() => playerMove({five: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={five.disable}
          >{five.sign}</button>
        </div>
        <div className='Page_field_six Item' onClick={() => playerMove({six: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={six.disable}
          >{six.sign}</button>
        </div>
        <div className='Page_field_seven Item' onClick={() => playerMove({seven: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={seven.disable}
          >{seven.sign}</button>
        </div>
        <div className='Page_field_eight Item' onClick={() => playerMove({eight: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={eight.disable}
          >{eight.sign}</button>
        </div>
        <div className='Page_field_nine Item' onClick={() => playerMove({nine: {sign: nowTern, disable: true}})}>
          <button
            className='Btn'
            disabled={nine.disable}
          >{nine.sign}</button>
        </div>
      </div>
    </div>
  )
}
