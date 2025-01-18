import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IsrcSearch } from './components/IsrcSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container text-center justify-self-center my-32'>
      <IsrcSearch />
    </div>
  )
}

export default App
