import React from 'react'
import { useState } from 'react'
import handleReadonly from '../utils/handleReadonly'

export default function GameExtraInfo(props) {
	const {isStarted} = props
	const [entry, setEntry] = useState(3000)
	const [players, setPlayers] = useState(7)
	const [reentry, setReentry] = useState(0)
	return (
		<div className='ExtraInfo | w-full flex-1 text-white text-xl px-10 font-semibold lg:text-2xl'>
			<div className='flex flex-col gap-4 mb-4 text-center'>
				<label htmlFor="entry">Entrada: $
					<input 
						type="text"
						id='entry' 
						defaultValue={3000} 
						onChange={e => setEntry(parseInt(e.target.value))}
						size={4} 
						className='bg-transparent outline-none w-14'
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
			</div>	

		</div>
	)
}
