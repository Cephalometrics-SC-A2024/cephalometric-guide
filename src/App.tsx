import React from 'react'
import './App.css'
import Slider from './components/molecules/Slider'

function App() {
  return (
    <div className="App bg-black w-full text-white h-screen overflow-y-scroll snap-y snap-mandatory overscroll-y-contain">
      <div
        className="h-screen flex flex-col w-full items-end justify-center relative snap-start"
        id="home"
      >
        <img
          src="/images/Rx.jpg"
          alt="Craneum rx"
          className="absolute left-0 top-20 scale-200"
        />
        <div className="w-2/5 p-12 text-[#B1ECFD]">
          <header className="text-left text-5xl mb-8 uppercase">
            Guía Cefalométrica
          </header>
          <p className="text-justify mr-8 text-xl mb-8">
            La cefalometría es el registro e interpretación de las mediciones
            del cráneo realizadas en radiografías estandarizadas de la cabeza
            viva.
          </p>
          <p className="text-justify mr-8 text-xl">
            Es considerada como una herramienta muy importante para los
            ortodoncistas y cirujanos maxilofaciales dedicados al estudio de la
            cefalometría. maloclusiones y las discrepancias esqueléticas
            subyacentes.
          </p>
        </div>
      </div>
      <div className="snap-start h-screen">
        <Slider />
      </div>
    </div>
  )
}

export default App
