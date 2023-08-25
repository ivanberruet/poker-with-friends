import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import BlindsTable from './BlindsTable'
import HistoricalTable from './HistoricalTable'
import HistoricalGames from './HistoricalGames'

export default function TournamentInfo() {
	return (
		<div className='TournamentInfo | bg-gray-950 w-full flex-1 text-white text-2xl px-8 py-8 font-semibold lg:text-2xl'>
			<div className='w-full'>
				<div className='w-full text-center underline underline-offset-4'>Información del torneo</div>
				<div className='w-full mt-8 text-xl'>Reglamento:</div>
				<ul className='flex flex-col text-sm lg:text-base'>
					<li className='list-inside list-disc marker:text-xl py-1 pt-2'>Modalidad de juego Texas Hold'em, dos cartas en mano (preflop) y 5 en mesa (flop, turn y river).</li>
					<li className='list-inside list-disc marker:text-xl py-1'>Entrada $3.000.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>1 reingreso permitido hasta antes de quedar solo 2 jugadores en juego ($3.000 el reingreso).</li>
					<li className='list-inside list-disc marker:text-xl py-1'>Inician con 2500 en fichas cada jugador.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>Incremento de ciegas cada 12 minutos.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>2do puesto 15% del pozo.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>1er puesto gana el resto del pozo (se incorporan los reingresos que se efectuan por los jugares).</li>
					<li className='list-inside list-disc marker:text-xl py-1 pb-2'>Todos amigos y gente cercana, ambiente muy tranquilo.</li>
				</ul>

				<BlindsTable />

				<div className='w-full text-center underline underline-offset-2'>Estadísticas</div>
				<div className='py-4'><span className='text-center text-lg font-bold'>Ganadores:
				</span>
				<ul className='flex flex-col text-base'>
					<li className='list-disc list-inside py-1 pt-2'>Sebastián Benitez: 3 <FontAwesomeIcon icon={faCrown} className='text-gold ml-1' /></li>
					<li className='list-disc list-inside py-1'>Iván Berruet: 1</li>
					<li className='list-disc list-inside py-1'>Sebastián Zupancic: 1</li>
					<li className='list-disc list-inside py-1'>Mirko Salinas: 1</li>
				</ul>
			</div>

			<HistoricalTable />

			<HistoricalGames />

			</div>
		</div>
	)
}
