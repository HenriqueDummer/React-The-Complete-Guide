import React from 'react'

const InitialScreen  = ({onClick}) => {
  return (
    <div>
        <h2>Welcome to the React Quiz</h2>
        <p>Click the start button whenever you are ready</p>
        <button onClick={() => onClick(true)}>Start</button>
    </div>
  )
}

export default InitialScreen