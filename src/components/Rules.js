import React from 'react'

export default function Rules() {
	return (
		<>
			<div className='w-full text-center underline underline-offset-4 lg:text-5xl'>Información del torneo</div>
			<div className='w-full mt-8 text-xl lg:text-4xl'>Reglamento:</div>
			<ul className='flex flex-col text-sm lg:text-xl'>
				<li className='list-inside list-disc marker:text-xl py-1 pt-2'>Modalidad de juego Texas Hold'em, dos cartas en mano (preflop) y 5 en mesa (flop, turn y river).</li>
				<li className='list-inside list-disc marker:text-xl py-1'>Entrada $3.000.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>1 reingreso por jugador permitido hasta antes de quedar solo 2 jugadores en juego ($3.000 el reingreso).</li>
				<li className='list-inside list-disc marker:text-xl py-1'>Inician con aproximadamente 1500 en fichas cada jugador.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>Incremento de ciegas cada 15 minutos.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>El pozo se conforma con la entrada de los jugadores y se le incorpora cada reingreso que se efectúe.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>1er puesto 85% del pozo.</li>
				<li className='list-inside list-disc marker:text-xl py-1'>2do puesto 15% del pozo.</li>
				<li className='list-inside list-disc marker:text-xl py-1 pb-2'>Todos amigos y gente cercana, ambiente muy tranquilo.</li>
			</ul>
		</>
	)
}
