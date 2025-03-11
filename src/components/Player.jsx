import { useState } from "react"; 

function Player({initialName, symbol,isActive,onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing((prevState) => !prevState);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }
    function handleChange(e) {
        setPlayerName(e.target.value);
        console.log(e.target.value);
        
    }
    return (
        
            <li className={isActive ? 'active' : undefined}>
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