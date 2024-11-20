import { useState } from "react";

const initalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onClickSquare, turns }) {
  let gameBoard = initalBoard;
  console.log(turns);

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initalBoard);
  //   //   console.log(gameBoard);

  //   function handleClick(rowIndex, cellIndex) {
  //     // console.log(gameBoard);
  //     setGameBoard((prevBoard) => {
  //       const newBoard = [...prevBoard];
  //       //   console.log(1, newBoard);
  //       newBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //       //   console.log(2, newBoard);
  //       return newBoard;
  //     });
  //     onClickSquare();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, cellIndex) => (
                <li key={cellIndex}>
                  <button onClick={() => onClickSquare(rowIndex, cellIndex)}>
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
