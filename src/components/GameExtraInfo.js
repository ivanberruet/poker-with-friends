import React from 'react'
import { useState } from 'react'
import handleReadonly from '../utils/handleReadonly'

export default function GameExtraInfo(props) {
	const {isStarted} = props
	const [entry, setEntry] = useState(3000)
	const [players, setPlayers] = useState(7)
	const [reentry, setReentry] = useState(0)
	return (
		<div className='ExtraInfo | w-full flex-1 text-white text-lg px-10 font-semibold lg:text-3xl lg:px-80'>
			<div className='grid grid-cols-2 grid-rows-3 grid-flow-col mb-4 gap-1 place-items-center'>
				
				<label htmlFor="entry">Entrada: $
					<input 
						type="text"
						id='entry' 
						defaultValue={3000} 
						onChange={e => setEntry(parseInt(e.target.value))}
						size={4} 
						className='bg-transparent outline-none w-20'
						readOnly={handleReadonly(isStarted)}
					/>
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
					/>
				</label>
				
				<label htmlFor="reentry">Re-entradas:
					<input 
						type="text"
						id='reentry'
						defaultValue={0} 
						onChange={e => setReentry(parseInt(e.target.value))}
						size={2} 
						className='bg-transparent outline-none w-8 pl-1'
					/>
				</label>
				
				<div>{`Pozo: $${isNaN(players) || isNaN(reentry) ? 0 : (players + reentry) * entry}`}</div>
				
				<div>{`1° Puesto: $${(players + reentry) * entry * 0.85}`}</div>
				
				<div>{`2° Puesto: $${(players + reentry) * entry * 0.15}`}</div>
			</div>	

		</div>
	)
}
