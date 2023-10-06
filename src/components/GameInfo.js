import React, {useRef, useState, useContext } from 'react'
import { blindsLevels } from '../data/blindsLevels'
import handleEditable from '../utils/handleEditable'
import ChipsInfo from './ChipsInfo' 

export default function Info(props) {
	const {time, setTime, currentLevel, isValid, setIsValid, isStarted} = props
	const userTime = useRef(time)

	const handleBlur = () => {
		let condition1 = isNaN(parseInt(time))
		let condition2 = parseInt(time) < 0;
		let condition3 = parseInt(time) > 20;
		
		if (condition1) {
			setIsValid(false)
			alert('Inserta un número válido');
      return;
    }
		else if (condition2) {
			setIsValid(false)
      alert('Inserta un número positivo');
      return;
		}
		else if (condition3) {
			setIsValid(false)
			alert('Inserta un número menor a 20');
			return;
		}
		else {
			setIsValid(true)
		}

	}

	const handleBorder = () => {
		let border = !isValid ? 'border-red-500' : 'border-none'

		return border
	}

	return (
		<div className='Info | flex-1 flex flex-col justify-center w-full px-10 text-xl font-semibold text-white lg:text-3xl lg:flex-row lg:items-center'>
			<ChipsInfo  />
			<div className='w-full py-2 text-center'>Tiempo por nivel:
			 <input 
			 	id='time' 
				type="text" 
				size={2} 
				ref={userTime} 
				defaultValue={15} 
				className={`border ${handleBorder()} outline-none bg-transparent pl-2 w-10 rounded-md outline`} 
				onChange={()=>setTime(userTime.current.value)} 
				onBlur={()=>handleBlur()}
				readOnly={!handleEditable(isStarted)}
				 />
			</div>

			<div className='w-full py-2 text-center lg:text-6xl'>
				{`Nivel Actual: ${blindsLevels[currentLevel].smallBlind}/${blindsLevels[currentLevel].bigBlind}`}
			</div>

			<div className='w-full py-2 text-center'>
				{`Nivel Siguiente: ${blindsLevels[currentLevel+1].smallBlind}/${blindsLevels[currentLevel+1].bigBlind}`}
			</div>
		</div>
	)
}
