import React from 'react'
import { useState } from 'react'
import handleReadonly from '../utils/handleReadonly'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

export default function ExtraInfo(props) {
	const {isStarted} = props
	const [entry, setEntry] = useState(3000)
	const [players, setPlayers] = useState(7)
	const [reentry, setReentry] = useState(0)
	return (
		<div className='ExtraInfo | w-full flex-1 text-white text-xl pl-14 font-semibold lg:text-2xl'>
			<div className='flex flex-col gap-4 mb-4 lg:text-center'>
				<label htmlFor="entry">Entrada: $
					<input 
						type="text"
						id='entry' 
						defaultValue={3000} 
						onChange={e => setEntry(parseInt(e.target.value))}
						size={4} 
						className='bg-transparent outline-none w-14'
						readOnly={handleReadonly(isStarted)}
					/> <span className='text-sm'>(Modificable)</span>
				</label>
				<label htmlFor="players">Jugadores:
					<input 
						type="text"
						id='players'
						defaultValue={7} 
						onChange={e => setPlayers(parseInt(e.target.value))}
						size={2} 
						className='bg-transparent outline-none w-8 pl-1'
						readOnly={handleReadonly(isStarted)}
					/> <span className='text-sm'>(Modificable)</span>
				</label>
				<label htmlFor="reentry">Re-entradas:
					<input 
						type="text"
						id='reentry'
						defaultValue={0} 
						onChange={e => setReentry(parseInt(e.target.value))}
						size={2} 
						className='bg-transparent outline-none w-8 pl-1'
					/> <span className='text-sm'>(Modificable)</span>
				</label>
				<div>{`Pozo: $${isNaN(players) || isNaN(reentry) ? 0 : (players + reentry) * entry}`}</div>
			</div>		
			<div><span className='underline underline-offset-4'>Información del torneo:</span>
				<ul className='flex flex-col text-sm pr-4 lg:text-base'>
					<li className='list-inside list-disc marker:text-xl py-1 pt-2'>Modalidad de juego Texas Hold'em, dos cartas en mano (preflop) y 5 en mesa (flop, turn y river).</li>
					<li className='list-inside list-disc marker:text-xl py-1'>Entrada $3.000.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>1 reingreso permitido hasta antes de quedar solo 2 jugadores en juego ($3.000 el reingreso).</li>
					<li className='list-inside list-disc marker:text-xl py-1'>Inician con 2500 en fichas cada jugador.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>Incremento de ciegas cada 12 minutos.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>2do puesto 15% del poso.</li>
					<li className='list-inside list-disc marker:text-xl py-1'>1er puesto gana el resto del pozo (se incorporan los reingresos que se efectuan por los jugares).</li>
					<li className='list-inside list-disc marker:text-xl py-1 pb-2'>Todos amigos y gente cercana, ambiente muy tranquilo.</li>
				</ul>
				<div className='py-4'><span className='underline underline-offset-4 text-center'>Ganadores</span>
				<ul className='flex flex-col text-base'>
					<li className='py-1 pt-2'>Sebastián Benitez: 3 <FontAwesomeIcon icon={faCrown} className='text-yellow-400 ml-1' /></li>
					<li className='py-1'>Iván Berruet: 1</li>
					<li className='py-1'>Sebastián Zupancic: 1</li>
					<li className='py-1'>Mirko Salinas: 1</li>
				</ul>
			</div>

			</div>
		</div>
	)
}
