import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Star_Rating from './components/Star_Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Star_Rating />
    </>
  )
}

export default App
