import React from 'react'
import { useState } from 'react'
import handleReadonly from '../utils/handleReadonly'

export default function ExtraInfo(props) {
	const {isStarted} = props
	const [entry, setEntry] = useState(3000)
	const [players, setPlayers] = useState(7)
	const [reentry, setReentry] = useState(0)
	return (
		<div className='flex-1 text-white text-xl pl-14 flex flex-col gap-4'>
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
			<div><span className='underline underline-offset-4'>Ganadores</span>
				<ul className='flex flex-col text-base'>
					<li className='py-1 pt-2'>Sebastián Benitez: 3</li>
					<li className='py-1'>Iván Berruet: 1</li>
					<li className='py-1'>Sebastián Zupancic: 1</li>
					<li className='py-1'>Mirko Salinas: 1</li>
				</ul>
			</div>
		</div>
	)
}
