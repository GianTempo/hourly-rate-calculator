import { useState } from "react";


function Calculator() {
  const PESOS_MINUTE_RATE = 200;
  const PESOS_HOUR_RATE = PESOS_MINUTE_RATE * 60;
  const USD_MINUTE_RATE = 2;
  const USD_HOUR_RATE = USD_MINUTE_RATE * 60;
  const HOUR_COMMAND = '!addh'
  const MINUTE_COMMAND = '!addm'

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const [minutesOrHours, setMinutesOrHours] = useState(0);
  const [command, setCommand] = useState('');

  const handleInputChange = (event: any) => {
    setAmount(event.target.value);
    const calcAmount = event.target.value;
    if (currency === 'pesos') {
      if (calcAmount % PESOS_HOUR_RATE === 0) {
        const commandAmount = calcAmount / PESOS_HOUR_RATE;
        setMinutesOrHours(commandAmount);
        setCommand(HOUR_COMMAND + " " + commandAmount)
      } else {
        const minutesAmount = Math.floor(calcAmount / PESOS_MINUTE_RATE)
        setMinutesOrHours(minutesAmount);
        setCommand(MINUTE_COMMAND + " " + minutesAmount)
      }
    }
    else if (currency === 'usd') {
      if (calcAmount % USD_HOUR_RATE === 0) {
				const commandAmount = calcAmount / USD_HOUR_RATE
				setMinutesOrHours(commandAmount)
				setCommand(HOUR_COMMAND + " " + commandAmount)
			} else {
				const minutesAmount = Math.floor(calcAmount / USD_MINUTE_RATE)
				setMinutesOrHours(minutesAmount)
				setCommand(MINUTE_COMMAND + " " + minutesAmount)
			}
    }
  }

  const setCurrencyFunc = (currency: string) => {
    setMinutesOrHours(0);
    setAmount(0);
    setCommand('');
    setCurrency(currency);
  }

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(command)
		} catch (err) {
			console.error("Error al copiar: ", err)
		}
	}

  return (
		<>
			<div className="mb-3">
				<h5>Seleccionar moneda:</h5>
				<div>
					<label className="form-check-label">
						<input
							type="radio"
							name="currency"
							value="pesos"
							checked={currency === "pesos"}
							onChange={() => setCurrencyFunc("pesos")}
							className="form-check-input mx-2"
						/>
						Pesos
					</label>
					<label className="form-check-label ms-3">
						<input
							type="radio"
							name="currency"
							value="usd"
							checked={currency === "usd"}
							onChange={() => setCurrencyFunc("usd")}
							className="form-check-input mx-2"
						/>
						Dólares
					</label>
				</div>
			</div>
			{currency !== "" && (
				<input
					type="number"
					className="form-control form-control-lg mb-4 w-25"
          placeholder="Cantidad donada"
          value={amount}
					onChange={(handleInputChange)}
				/>
			)}
			{command && minutesOrHours > 0 && (
				<div>
					<h3 className="mb-4">El comando a usar es: {command}</h3>
					<button className="btn btn-primary btn-lg" onClick={copyToClipboard}>
						Copiar comando
					</button>
				</div>
			)}
		</>
	)

}

export default Calculator