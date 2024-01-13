import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KanbanBoard from './component/KanbanBoard'
import Navbar from './component/Navbar'

function App() {
  
  return (
    <div>
    <Navbar />
   <KanbanBoard />
   </div>
  )
}

export default App
