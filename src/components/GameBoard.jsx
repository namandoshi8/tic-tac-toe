import { useState } from "react";

function GameBoard({ onClickSquare, board }) {
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
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, cellIndex) => (
                <li key={cellIndex}>
                  <button
                    onClick={() => onClickSquare(rowIndex, cellIndex)}
                    disabled={playerSymbol !== null}
                  >
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
