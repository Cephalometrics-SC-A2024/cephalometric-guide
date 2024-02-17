import React from 'react'
import './App.css'
import Slider from './components/molecules/Slider'
import Home from './components/atoms/Home'

function App() {
  return (
    <div className="App bg-black w-full text-white h-screen overflow-y-scroll snap-y snap-mandatory overscroll-y-contain">
      <Home />
      <div className="snap-start h-screen">
        <Slider />
      </div>
    </div>
  )
}

export default App
