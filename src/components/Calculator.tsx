import { useState } from "react";


function Calculator() {
  const PESOS_MINUTE_RATE = PESOS_HOUR_RATE / 60;
  const PESOS_HOUR_RATE = 20000;
  const USD_MINUTE_RATE = 0.4;
  const USD_HOUR_RATE = USD_MINUTE_RATE * 60;
  const HOUR_COMMAND = '!addh'
  const MINUTE_COMMAND = '!addm'
  const BITS_RATE = 100 / 7;
  const SUBS_RATE = 5;
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
		<div className="pb-5">
			<div className="mb-3">
				Para referencia:
				<br />- Una hora en pesos es <b>${PESOS_HOUR_RATE}</b>.
				<br />- Un minuto en pesos es <b>${PESOS_MINUTE_RATE}</b>.
			</div>
				<div className="col-6 col-md-4">
					<input
						type="number"
						className="form-control form-control-lg mb-4"
						placeholder="Cantidad donada"
						value={amount}
						onChange={handleInputChange}
					/>
				</div>
			{command && minutesOrHours > 0 && (
				<div>
					<h3 className="mb-4">El comando a usar es: {command}</h3>
					<button className="btn btn-primary btn-lg" onClick={copyToClipboard}>
						Copiar comando
					</button>
				</div>
			)}
		</div>
	)

}

export default Calculator