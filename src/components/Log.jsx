function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { square, player } = turn;
        const { row, col } = square;
        return (
          <li key={`${row}-${col}`} className={`highlighted`}>
            {player} played at {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}

export default Log;
