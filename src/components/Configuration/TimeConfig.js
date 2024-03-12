import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function TimeConfig(props) {
	const {className, time, setTime, startingLevel, setStartingLevel} = props
	const [isValid, setIsValid] = useState(true)

	const handleMinus = (state, setState) => {
		if(state > 0){
			setState(state - 1)
		}
	}
	const handlePlus = (state, setState) => {
		if(state < 28){
			setState(state + 1)
		}
	}

	return (
		<div className={`${className} w-full flex flex-col gap-6`}>
			<div className='AddingConfigItem | flex'>
				<p className='mr-2'>Tiempo por nivel (en minutos):</p>
				<span className='flex items-center cursor-pointer' onClick={() => handleMinus(time,setTime)}>
					<FontAwesomeIcon icon={faMinus} className="text-gold px-2"/>
				</span>
				<input 
				type="text"
				size={1} 
				value={time}
				className={`outline-none bg-transparent w-max rounded-md text-center`} 
				readOnly={true}
				/>
				<span className='flex items-center cursor-pointer'>
					<FontAwesomeIcon icon={faPlus} className="text-gold px-2" onClick={() => handlePlus(time,setTime)}/>
				</span>
			</div>

			<div className='AddingConfigItem | flex'>
				<p className='mr-2'>Nivel inicial:</p>
				<span className='flex items-center cursor-pointer' onClick={() => handleMinus(startingLevel,setStartingLevel)}>
					<FontAwesomeIcon icon={faMinus} className="text-gold px-2"/>
				</span>
				<input 
				type="text"
				size={1} 
				value={startingLevel}
				className={`outline-none bg-transparent w-max rounded-md text-center`} 
				readOnly={true}
				/>
				<span className='flex items-center cursor-pointer'>
					<FontAwesomeIcon icon={faPlus} className="text-gold px-2" onClick={() => handlePlus(startingLevel,setStartingLevel)}/>
				</span>
			</div>
		</div>
	)
}
