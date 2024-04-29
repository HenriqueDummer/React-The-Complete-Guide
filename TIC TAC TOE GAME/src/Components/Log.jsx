const Log = ({gameTurns}) => {
    return(
        <ol id="log">
            {gameTurns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.coll}`}>{turn.player} placead at {turn.square.row}, {turn.square.coll}</li>
            ))}
        </ol>
    )
}

export default Log