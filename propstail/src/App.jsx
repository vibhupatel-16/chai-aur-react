import React from 'react'
import './index.css'
import Card from './components/Card'

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-row gap-6">
        <Card username="john" btntext = "View More"/>
        <Card username="Deo" btntext="View More" />
      </div>
    </div>
  )
}

export default App
