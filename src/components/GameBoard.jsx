import { useState } from "react";

const initalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initalBoard);
  //   console.log(gameBoard);

  function handleClick(rowIndex, cellIndex) {
    // console.log(gameBoard);
    setGameBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      //   console.log(1, newBoard);
      newBoard[rowIndex][cellIndex] = "X";
      //   console.log(2, newBoard);
      return newBoard;
    });
  }

  return (
    <ol id="game-board">
      {initalBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, cellIndex) => (
                <li key={cellIndex}>
                  <button onClick={() => handleClick(rowIndex, cellIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}

export default GameBoard;
