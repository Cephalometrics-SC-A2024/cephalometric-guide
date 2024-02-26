import React from 'react'
import { ReactComponent as LogoULA } from '../../../assets/LogoULA.svg'

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col w-full items-end justify-start md:justify-center relative snap-start"
      id="home"
    >
      <img
        src="/images/Rx.jpg"
        alt="Craneum rx"
        className="absolute -left-20 md:left-0 -bottom-0 scale-50 md:top-20 md:bottom-auto md:scale-200"
      />
      <div className="w-full md:w-2/5 p-8 md:p-12 text-[#B1ECFD]">
        <LogoULA className="w-full md:w-80 md:absolute top-0" />
        <header className="text-center md:text-left text-2xl md:text-5xl mb-8 uppercase">
          Guía Cefalométrica
        </header>
        <p className="text-justify md:mr-8 text-md tracking-tight md:text-xl mb-8">
          La cefalometría es el registro e interpretación de las mediciones del
          cráneo realizadas en radiografías estandarizadas de la cabeza viva.
        </p>
        <p className="text-justify md:mr-8 text-md tracking-tight md:text-xl">
          Es considerada como una herramienta muy importante para los
          ortodoncistas y cirujanos maxilofaciales dedicados al estudio de la
          cefalometría. maloclusiones y las discrepancias esqueléticas
          subyacentes.
        </p>
        <p className="w-2/5 md:w-full right-8 md:right-auto absolute bottom-32 md:bottom-12 text-sm text-left">
          <strong>Por:</strong> Josmar Muñoz y Jorge Rodriguez <br />{' '}
          <strong>Tutor:</strong> Jormany Quintero
        </p>
      </div>
    </div>
  )
}
