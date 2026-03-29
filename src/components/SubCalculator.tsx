import { useState } from 'react';

function SubCalculator() {
  const SUB_RATE = 5; // 5 minutos por cada sub.
  const HOUR_COMMAND = '!addh'
  const MINUTE_COMMAND = '!addm'
  
  const [subAmount, setSubAmount] = useState(0);
  const [subCommand, setSubCommand] = useState('');
  
  const handleChange = (event: any) => {
    const amount = event.target.value;
    setSubAmount(amount);
    const minutes = Math.floor(amount * SUB_RATE);
    
    if (minutes % 60 === 0) {
      const hours = minutes / 60;
      setSubCommand(HOUR_COMMAND + " " + hours)
    } else {
      setSubCommand(MINUTE_COMMAND + " " + minutes)
    }
  }
  
  const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(subCommand)
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
		  				placeholder="Cantidad DE SUBS donadas"
				  		value={subAmount}
			  			onChange={handleChange}
				  	/>
				  </div>
      {subAmount && subCommand && (
       <div>
				   	<h3 className="mb-4">El comando a usar es: {subCommand}</h3>
				   	<button className="btn btn-primary btn-lg" onClick={copyToClipboard}>
				   		Copiar comando
				   	</button>
			   	</div>
      )}
    </div>
  )
}

export default SubCalculator