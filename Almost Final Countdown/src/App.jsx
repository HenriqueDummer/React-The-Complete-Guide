import { useState } from 'react'

import Player from './components/Player'
import TimerChallenge from './components/TimerChallenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting eough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  )
}

export default App
