import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
