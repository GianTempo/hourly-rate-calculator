import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import BitsCalculator from './components/BitsCalculator'
import SubCalculator from './components/SubCalculator'

function App() {

  return (
    <>
      <div className="container">
        <div className="header pb-2 pb-md-5">
          <h1 className='py-4 py-md-5'>Calculadora de donaciones</h1>
          <h4>La idea de esto es poner la cantidad donada en el input de acá abajo.</h4>
          <h4>El input va a calcular automáticamente qué comandos poner, según si son horas redondas o no.</h4>
          <h4>Si la cantidad coincide con una cantidad x de horas, va a devolver el comando de horas, si no va a devolver los minutos totales para ese monto.</h4>
        </div>
        <div className="body">
          <Calculator></Calculator>
          <BitsCalculator></BitsCalculator>
          <SubCalculator></SubCalculator>
        </div>
      </div>
    </>
  )
}

export default App
