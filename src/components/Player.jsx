import { useState } from "react";

function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditing() {
    setIsEditing((prev) => !prev);
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <button onClick={handleEditing}>Save</button>
        ) : (
          <button onClick={handleEditing}>Edit</button>
        )}
      </span>
    </li>
  );
}

export default Player;
