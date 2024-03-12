import React from 'react'
import { useState, useContext } from 'react'
import handleEditable from '../../utils/handleEditable'
import {PlayersContext} from '../../mainComponents/Game'

export default function GameExtraInfo(props) {
	const {isStarted} = props
	const {players, setPlayers} = useContext(PlayersContext)
	const [entry, setEntry] = useState(3000)
	const [reentry, setReentry] = useState(0)
	
	return (
		<div className='ExtraInfo |flex justify-center w-full flex-1 text-white text-lg px-10 font-semibold lg:text-3xl lg:px-80 lg:py-10'>
			<div className='Grid_Container | grid grid-cols-2 grid-rows-3 grid-flow-col mb-4 gap-2 place-items-center'>
				
				<div className='flex flex-col items-center mb-2 lg:flex-row'>
					<span className='lg:mr-1'>Entrada:</span>
					<div className='flex pt-1'>
						<span>$</span>
						<span 
							role='textbox' 
							contentEditable={handleEditable(isStarted)}
							suppressContentEditableWarning={true}
							onInput={e => setEntry(isNaN(parseInt(e.currentTarget.innerText)) ? 0 : parseInt(e.currentTarget.innerText))}
							className=''
						>
							3000
						</span>
					</div>
				</div>

				
				<div className='flex flex-col items-center lg:flex-row'>
					<span className='lg:mr-1'>Jugadores:</span>
					<div className='flex pt-1'>
						<span 
							role='textbox' 
							contentEditable={handleEditable(isStarted)}
							suppressContentEditableWarning={true}
							onInput={e => setPlayers(isNaN(parseInt(e.currentTarget.innerText)) ? 0 : parseInt(e.currentTarget.innerText))}
							className=''
						>
							7
						</span>
					</div>
				</div>

				
				<div className='flex flex-col items-center lg:flex-row'>
					<span className='lg:mr-1'>Re-entradas:</span>
					<div className='flex pt-1'>
						<span 
							role='textbox' 
							contentEditable={true}
							suppressContentEditableWarning={true}
							onInput={e => setReentry(isNaN(parseInt(e.currentTarget.innerText)) ? 0 : parseInt(e.currentTarget.innerText))}
							className=''
						>
							0
						</span>
					</div>
				</div>
				
				<div className='flex flex-col items-center mb-2 lg:flex-row'>
					<span className='lg:mr-1'>Pozo:</span>
					<div>
						<span>$</span>
						<span>{`${isNaN(players) || isNaN(reentry) ? 0 : (players + reentry) * entry}`}</span>
					</div>
				</div>
				
				<div className='flex flex-col items-center mb-2 lg:flex-row'>
					<span className='lg:mr-1'>1° Puesto:</span>
					<div>
						<span>$</span>
						<span>{`${(players + reentry) * entry * 0.85}`}</span>
					</div>
				</div>
				
				<div className='flex flex-col items-center mb-2 lg:flex-row'>
					<span className='lg:mr-1'>2° Puesto:</span>
					<div>
						<span>$</span>
						<span>{`${(players + reentry) * entry * 0.15}`}</span>
					</div>
				</div>
			</div>	

		</div>

	)
}
