import React from 'react'
import { useState, useEffect } from 'react'

const ProgressBar = ({timer}) => {
  const [remainingTime, setRemainingTime] = useState(timer)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTimer => prevTimer - 10)
    }, 10)

    return () => {
      clearInterval(interval)
    }
    }, [])
  return (
    <progress value={remainingTime} max={timer} />
  )
}

export default ProgressBar