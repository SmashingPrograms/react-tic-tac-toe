import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const tableNums = [...Array(9).keys()]

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])

  function playerMove(index) {
    const boardClone = [...board];
    boardClone[index] = 'x';
    console.log(boardClone)
    setBoard(boardClone)
  }

  return (
    <div className="App">
      <h1>Your turn!</h1>
      <div class="game-container">
        {
          tableNums.map((num, key) => {
            return <div name={num} key={key} className="cell" onClick={() => playerMove(num)}>{board[num]}</div>
          })
        }
      </div>
    </div>
  )
}

export default App;