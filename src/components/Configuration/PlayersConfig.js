import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


export default function PlayersConfig(props) {
	const {className, players, setPlayers, reentry, setReentry, eliminatedPlayers, setEliminatedPlayers} = props

	const handleMinus = (state, setState) => {
		if(state > 0){
			setState(state - 1)
		}
	}
	const handlePlus = (state, setState) => {
		setState(state + 1)
	}

	const ConfigItem =({title, state, setState}) => {
		return (
			<div className='flex'>
				<p className='mr-2'>{title}:</p>
				<span className='flex items-center cursor-pointer' onClick={() => handleMinus(state,setState)}>
					<FontAwesomeIcon icon={faMinus} className="text-gold px-2"/>
				</span>
				<input 
				type="text"
				size={1} 
				value={state}
				className={`outline-none bg-transparent w-max rounded-md text-center`} 
				readOnly={true}
				/>
				<span className='flex items-center cursor-pointer'>
					<FontAwesomeIcon icon={faPlus} className="text-gold px-2" onClick={() => handlePlus(state,setState)}/>
				</span>
		</div>

		)
	}

return (
		<div className={`${className} w-full flex flex-col gap-6`}>
			<ConfigItem title='Jugadores inscritos' state={players} setState={setPlayers}/>
			<ConfigItem title='Jugadores eliminados' state={eliminatedPlayers} setState={setEliminatedPlayers}/>
			<ConfigItem title='Reentradas' state={reentry} setState={setReentry}/>
		</div>
	)
}
