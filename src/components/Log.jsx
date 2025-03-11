export default function Log({gameLogs}) {
  return (
    <ol id="game-log">
      {gameLogs.map((log, index) => (
        <li key={`${log.square.row}${log.square.cell}`}>{log.player} selected {log.square.row},{log.square.cell}</li>                  
        ))}
    </ol>
  );
}