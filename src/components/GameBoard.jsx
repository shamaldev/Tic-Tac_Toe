import  { useState } from "react";



export default function GameBoard({onSelectSquare,board}) {

  

//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   function handleClick(row, cell) {
//   setGameBoard((prevState)=>{
//     const newGameBoard = [...prevState];
//     newGameBoard[row][cell] = activeSymbol;
//     return newGameBoard;
//   })
//     onSelectSquare();
//   }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,cellIndex)} disabled={cell !==null }>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
