//--------- этот хук проверяет в стейте последний сделанный ход и определяет был ли выйгрыш ------
//--------- в качестве результата возвращат null или массив из трех выйгравших ячеек -------------
import { useAppSelector } from './hook'

export const useCheckWinner = () => {
  const { one, two, three, four, five, six, seven, eight, nine } = useAppSelector(state => state.field.gameField)
  const gameField = [ one, two, three, four, five, six, seven, eight, nine ]

  const nowTern = useAppSelector(state => state.game.nowTern)
  const prevTern = (nowTern === 'X') ? 'O' : 'X'

  let sumField: number[] = []
  let winner: number[] | null = null

  for (let i=0; i<gameField.length; i++) {      
    if(gameField[i].sign === prevTern) {
      sumField.push(1+i)
    }
  }

  if(sumField.filter(item => item === 1).length) {
    if(sumField.filter(item => item === 2).length) {
      if(sumField.filter(item => item === 3).length) {
        winner = [1, 2, 3]
      }
    }
    if(sumField.filter(item => item === 5).length) {
      if(sumField.filter(item => item === 9).length) {
        winner = [1, 5, 9]
      }
    }
    if(sumField.filter(item => item === 4).length) {
      if(sumField.filter(item => item === 7).length) {
        winner = [1, 4, 7]
      }
    }
  }

  if(sumField.filter(item => item === 2).length) {
    if(sumField.filter(item => item === 5).length) {
      if(sumField.filter(item => item === 8).length) {
        winner = [2, 5, 8]
      }
    }
  }

  if(sumField.filter(item => item === 3).length) {
    if(sumField.filter(item => item === 5).length) {
      if(sumField.filter(item => item === 7).length) {
        winner = [3, 5, 7]
      }
    }
    if(sumField.filter(item => item === 6).length) {
      if(sumField.filter(item => item === 9).length) {
        winner = [3, 6, 9]
      }
    }
  }
  
  if(sumField.filter(item => item === 4).length) {
    if(sumField.filter(item => item === 5).length) {
      if(sumField.filter(item => item === 6).length) {
        winner = [4, 5, 6]
      }
    }
  }

  if(sumField.filter(item => item === 7).length) {
    if(sumField.filter(item => item === 8).length) {
      if(sumField.filter(item => item === 9).length) {
        winner = [7, 8, 9]
      }
    }
  }

  return (winner)
}
