import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

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

  // console.log(activePlayer);

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {/* Game Board */}
        <GameBoard onClickSquare={handleClick} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
