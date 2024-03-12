import React from 'react'

export default function Rules({entry, winners, firstPercentage, secondPercentage, thirdPercentage, time}) {
	let styledEntry = new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0}).format(entry);

	let prizes = []
	let percentages = [firstPercentage, secondPercentage, thirdPercentage]
		for (let i = 0; i < winners; i++) {
			prizes.push(<li key={i} className='list-inside list-disc marker:text-xl py-1'>Al {i+1}° Puesto se le otorga un premio de {percentages[i]}% del pozo.</li>)
		}

	return (
		<>
			<div className='w-full text-center underline underline-offset-4 lg:text-5xl'>Información del torneo</div>
			<div className='w-full mt-8 text-xl lg:text-4xl'>Reglamento:</div>
			<ul className='flex flex-col text-sm lg:text-xl'>
				<li className='list-inside list-disc marker:text-xl py-1 pt-2'>Modalidad de juego Texas Hold'em, dos cartas en mano (preflop) y 5 en mesa (flop, turn y river).</li>
				<li className='list-inside list-disc marker:text-xl py-1'>Entrada {styledEntry}.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>1 reingreso por jugador permitido hasta antes de quedar solo 2 jugadores en juego ({styledEntry} el reingreso).</li>
				<li className='list-inside list-disc marker:text-xl py-1'>Cada jugador inicia con un mínimo de 1500 en fichas (150 BB). Pueden ser más dependiendo de la cantidad de jugadores.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>Incremento de ciegas cada {time} minutos.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>El pozo se conforma con la entrada de los jugadores y se le incorpora cada reingreso que se efectúe.</li>
				{prizes}
				<li className='list-inside list-disc marker:text-xl py-1 pb-2'>Todos amigos y gente cercana, ambiente muy tranquilo.</li>
			</ul>
		</>
	)
}
