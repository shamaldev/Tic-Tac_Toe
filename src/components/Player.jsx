import { useState } from "react"; 

function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing((prevState) => !prevState);
    }
    function handleChange(e) {
        setPlayerName(e.target.value);
        console.log(e.target.value);
        
    }
    return (
        
            <li>
            <span className="player">
           {isEditing ? (
            <input type="text" value={playerName   } onChange={handleChange} />
            ) : (<span className="player-name">{playerName}</span>)}

            
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
        
    );
}

export default Player;