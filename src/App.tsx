import { useEffect } from 'react'
import canvasConfetti from './utils/canvas-confetti'

export default function App() {
  useEffect(() => {
    canvasConfetti()
  }, [])

  return (
    <>
      <button onClick={() => canvasConfetti()}>Launch Confetti</button>
    </>
  )
}

// TIP: Open https://www.kirilv.com/canvas-confetti/ to see more examples
