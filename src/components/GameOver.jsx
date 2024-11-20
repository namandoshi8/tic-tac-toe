function GameOver({ winner, handleReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} wins!</p> : <p>It's a draw!</p>}
      <p>
        <button onClick={handleReset}>Play Again!</button>
      </p>
    </div>
  );
}

export default GameOver;
