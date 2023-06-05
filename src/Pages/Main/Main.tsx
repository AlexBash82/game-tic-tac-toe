import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hook'
import { moveTo } from '../../store/fieldSlice'
import './Main.scss'

export const Main: React.FC = () => {

  const dispatch = useAppDispatch()
  const { one, two, three, four, five, six, seven, eight, nine } = useAppSelector(state => state.main.gameField)



  return (
    <div className='Page'>
      <div className='Page_topic'>Крестики - нолики</div>
      <div className='Page_field'>
        <div className='Page_field_one Item' onClick={() => dispatch(moveTo({one: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={one.disable}
          >{one.sign}</button>
        </div>
        <div className='Page_field_two Item' onClick={() => dispatch(moveTo({two: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={two.disable}
          >{two.sign}</button>
        </div>
        <div className='Page_field_three Item' onClick={() => dispatch(moveTo({three: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={three.disable}
          >{three.sign}</button>
        </div>
        <div className='Page_field_four Item' onClick={() => dispatch(moveTo({four: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={four.disable}
          >{four.sign}</button>
        </div>
        <div className='Page_field_five Item' onClick={() => dispatch(moveTo({five: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={five.disable}
          >{five.sign}</button>
        </div>
        <div className='Page_field_six Item' onClick={() => dispatch(moveTo({six: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={six.disable}
          >{six.sign}</button>
        </div>
        <div className='Page_field_seven Item' onClick={() => dispatch(moveTo({seven: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={seven.disable}
          >{seven.sign}</button>
        </div>
        <div className='Page_field_eight Item' onClick={() => dispatch(moveTo({eight: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={eight.disable}
          >{eight.sign}</button>
        </div>
        <div className='Page_field_nine Item' onClick={() => dispatch(moveTo({nine: {sign: 'O', disable: true}}))}>
          <button
            className='Btn'
            disabled={nine.disable}
          >{nine.sign}</button>
        </div>
      </div>
    </div>
  )
}
