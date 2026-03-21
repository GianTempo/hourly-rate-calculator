import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="header pb-5">
          <h1 className='py-5'>Calculadora de donaciones</h1>
          <h4>La idea de esto es poner la cantidad donada en el input de acá abajo.</h4>
          <h4>El input va a calcular automáticamente qué comandos poner, según si son horas redondas o no.</h4>
          <h4>Si la cantidad coincide con una cantidad x de horas, va a devolver el comando de horas, si no va a devolver los minutos totales para ese monto.</h4>
        </div>
        <div className="body">
          <Calculator></Calculator>
        </div>
      </div>
    </>
  )
}

export default App
