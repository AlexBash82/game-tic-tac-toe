import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hook'
import { moveTo } from '../../store/fieldSlice'
import './Main.scss'

export const Main: React.FC = () => {

  const dispatch = useAppDispatch()
  const { one, two, three, four, five, six, seven, eight, nine } = useAppSelector(state => state.main.gameField)
  const [personSign, setPersonSign] = useState('X')

  useEffect(() => {    
    const gameField = [ one, two, three, four, five, six, seven, eight, nine ]    
    let xField: number[] = []
    let winner: string | null = null

    for (let i=0; i<gameField.length; i++) {      
      if(gameField[i].sign == 'X') {
        xField.push(1+i)
      }
    }

    if(xField.filter(item => item === 1).length) {
      if(xField.filter(item => item === 2).length) {
        if(xField.filter(item => item === 3).length) {
          winner = 'X'
        }
      }
      if(xField.filter(item => item === 5).length) {
        if(xField.filter(item => item === 9).length) {
          winner = 'X'
        }
      }
      if(xField.filter(item => item === 4).length) {
        if(xField.filter(item => item === 7).length) {
          winner = 'X'
        }
      }
    }

    if(xField.filter(item => item === 2).length) {
      if(xField.filter(item => item === 5).length) {
        if(xField.filter(item => item === 8).length) {
          winner = 'X'
        }
      }
    }

    if(xField.filter(item => item === 3).length) {
      if(xField.filter(item => item === 5).length) {
        if(xField.filter(item => item === 7).length) {
          winner = 'X'
        }
      }
      if(xField.filter(item => item === 6).length) {
        if(xField.filter(item => item === 9).length) {
          winner = 'X'
        }
      }
    }
    
    if(xField.filter(item => item === 4).length) {
      if(xField.filter(item => item === 5).length) {
        if(xField.filter(item => item === 6).length) {
          winner = 'X'
        }
      }
    }

    if(xField.filter(item => item === 7).length) {
      if(xField.filter(item => item === 8).length) {
        if(xField.filter(item => item === 9).length) {
          winner = 'X'
        }
      }
    }

    console.log('WINNER - ', winner)
  
  }, [one, two, three, four, five, six, seven, eight, nine])

  function playerMove(obj: object) {
    dispatch(moveTo(obj))
  }

  return (
    <div className='Page'>
      <div className='Page_topic'>Крестики - нолики</div>
      <div className='Page_description'>Первыми всегда ходят крестики. Ваш ход!</div>
      <button className='ChoisenBtn'>Играть ноликами</button>
      <button className='ChoisenBtn'>Начать заново</button>
      <div className='Page_field'>
        <div className='Page_field_one Item' onClick={() => playerMove({one: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={one.disable}
          >{one.sign}</button>
        </div>
        <div className='Page_field_two Item' onClick={() => playerMove({two: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={two.disable}
          >{two.sign}</button>
        </div>
        <div className='Page_field_three Item' onClick={() => playerMove({three: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={three.disable}
          >{three.sign}</button>
        </div>
        <div className='Page_field_four Item' onClick={() => playerMove({four: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={four.disable}
          >{four.sign}</button>
        </div>
        <div className='Page_field_five Item' onClick={() => playerMove({five: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={five.disable}
          >{five.sign}</button>
        </div>
        <div className='Page_field_six Item' onClick={() => playerMove({six: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={six.disable}
          >{six.sign}</button>
        </div>
        <div className='Page_field_seven Item' onClick={() => playerMove({seven: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={seven.disable}
          >{seven.sign}</button>
        </div>
        <div className='Page_field_eight Item' onClick={() => playerMove({eight: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={eight.disable}
          >{eight.sign}</button>
        </div>
        <div className='Page_field_nine Item' onClick={() => playerMove({nine: {sign: personSign, disable: true}})}>
          <button
            className='Btn'
            disabled={nine.disable}
          >{nine.sign}</button>
        </div>
      </div>
    </div>
  )
}
