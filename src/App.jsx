import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ul>
        <li><strong>Nombre:</strong> Cristian.</li>
        <li><strong>Edad:</strong> 22 años.</li>
        <li><strong>Película favorita:</strong> Avengers: End Game</li>
        <li><strong>Música favorita:</strong> Electronica</li>
      </ul>

    </div>
  )
}

export default App
