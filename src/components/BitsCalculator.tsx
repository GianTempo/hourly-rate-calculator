import { useState } from 'react';

function BitsCalculator() {
  const BITS_RATE = 100 / 7; // 7 minutos por cada 100 bits
  const HOUR_COMMAND = '!addh'
  const MINUTE_COMMAND = '!addm'
  
  const [bitsAmount, setBitsAmount] = useState(0);
  const [bitsCommand, setBitsCommand] = useState('');
  
  const handleChange = (event: any) => {
    const amount = event.target.value;
    setBitsAmount(amount);
    const minutes = amount / BITS_RATE;
    
    if (minutes % 60 === 0) {
      const hours = minutes / 60;
      setBitsCommand(HOUR_COMMAND + " " + hours)
    } else {
      setBitsCommand(MINUTE_COMMAND + " " + minutes)
    }
  }
  
  const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(bitsCommand)
		} catch (err) {
			console.error("Error al copiar: ", err)
		}
	}
  
  return (
    <div className="pb-5">
       Calcular bits:
      <div className="col-6 col-md-4">
		  			<input
			  			type="number"
				  		className="form-control form-control-lg mb-4"
		  				placeholder="Cantidad DE BITS donados"
				  		value={bitsAmount}
			  			onChange={handleChange}
				  	/>
				  </div>
      {bitsAmount && bitsCommand && (
       <div>
				   	<h3 className="mb-4">El comando a usar es: {bitsCommand}</h3>
				   	<button className="btn btn-primary btn-lg" onClick={copyToClipboard}>
				   		Copiar comando
				   	</button>
			   	</div>
      )}
    </div>
  )
}

export default BitsCalculator