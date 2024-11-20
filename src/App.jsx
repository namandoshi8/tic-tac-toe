import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";

const initalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initalBoard.map((row) => [...row])];
  let winner;
  // console.log(turns);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    console.log(gameBoard);
  }
  // console.log(activePlayer);

  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      gameBoard[a.row][a.column] === "X" &&
      gameBoard[b.row][b.column] === "X" &&
      gameBoard[c.row][c.column] === "X"
    ) {
      console.log("Player 1 wins!");
      winner = "X";
      break;
    }
    if (
      gameBoard[a.row][a.column] === "O" &&
      gameBoard[b.row][b.column] === "O" &&
      gameBoard[c.row][c.column] === "O"
    ) {
      console.log("Player 2 wins!");
      winner = "O";
      break;
    }
  }

  const draw = gameTurns.length === 9 && !winner;

  function handleClick(rowIndex, cellIndex) {
    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prev) => {
      const currentPlayer = deriveActivePlayer(prev);
      const updatedTurns = [
        { square: { row: rowIndex, col: cellIndex }, player: currentPlayer },
        ...prev,
      ];
      return updatedTurns;
    });
    console.log(gameTurns);
    console.log(activePlayer);
    console.log(rowIndex, cellIndex);
  }

  function handleReset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || draw) && (
          <GameOver handleReset={handleReset} winner={winner} />
        )}
        {/* Game Board */}
        <GameBoard onClickSquare={handleClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
