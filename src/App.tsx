import { useEffect } from 'react'
import confetti from './utils/canvas-confetti'

export default function App() {
  useEffect(() => {
    confetti()
  }, [])

  return (
    <>
      <button onClick={() => confetti()}>Launch Confetti</button>
    </>
  )
}

// TIP: Open https://www.kirilv.com/canvas-confetti/ to see more examples
