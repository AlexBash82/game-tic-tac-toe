//--------- этот хук проверяет в стейте последний сделанный ход и определяет был ли выйгрыш ------
//--------- в качестве результата возвращат null или массив из трех выйгравших ячеек -------------
import { useAppSelector } from './useApp'

export const useCheckWinner = () => {
  const { sideNW, sideN, sideNE, sideW, sideM, sideE, sideSW, sideS, sideSE } =
    useAppSelector((state) => state.field.gameField)
  const gameField = [
    sideNW,
    sideN,
    sideNE,
    sideW,
    sideM,
    sideE,
    sideSW,
    sideS,
    sideSE,
  ]
  const isOver = useAppSelector((state) => state.game.isOver)
  const nowTern = useAppSelector((state) => state.game.nowTern)
  const prevTern = nowTern === 'X' ? 'O' : 'X'
  let winner: string[] | null = null

  if (!isOver) {
    let sumField: number[] = []

    for (let i = 0; i < gameField.length; i++) {
      if (gameField[i].sign === prevTern) {
        sumField.push(1 + i)
      }
    }

    if (sumField.filter((item) => item === 1).length) {
      if (sumField.filter((item) => item === 2).length) {
        if (sumField.filter((item) => item === 3).length) {
          winner = ['sideNW', 'sideN', 'sideNE']
        }
      }
      if (sumField.filter((item) => item === 5).length) {
        if (sumField.filter((item) => item === 9).length) {
          winner = ['sideNW', 'sideM', 'sideSE']
        }
      }
      if (sumField.filter((item) => item === 4).length) {
        if (sumField.filter((item) => item === 7).length) {
          winner = ['sideNW', 'sideW', 'sideSW']
        }
      }
    }

    if (sumField.filter((item) => item === 2).length) {
      if (sumField.filter((item) => item === 5).length) {
        if (sumField.filter((item) => item === 8).length) {
          winner = ['sideN', 'sideM', 'sideS']
        }
      }
    }

    if (sumField.filter((item) => item === 3).length) {
      if (sumField.filter((item) => item === 5).length) {
        if (sumField.filter((item) => item === 7).length) {
          winner = ['sideNE', 'sideM', 'sideSW']
        }
      }
      if (sumField.filter((item) => item === 6).length) {
        if (sumField.filter((item) => item === 9).length) {
          winner = ['sideNE', 'sideE', 'sideSE']
        }
      }
    }

    if (sumField.filter((item) => item === 4).length) {
      if (sumField.filter((item) => item === 5).length) {
        if (sumField.filter((item) => item === 6).length) {
          winner = ['sideW', 'sideM', 'sideE']
        }
      }
    }

    if (sumField.filter((item) => item === 7).length) {
      if (sumField.filter((item) => item === 8).length) {
        if (sumField.filter((item) => item === 9).length) {
          winner = ['sideSW', 'sideS', 'sideSE']
        }
      }
    }
  }
  return winner
}
