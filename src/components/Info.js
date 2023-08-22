import React, {useRef, useState } from 'react'
import { blindsLevels } from '../data/blindsLevels'

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

	const handleInput = () => {
		let readonly = isStarted ? true : false
		return readonly
	}
	return (
		<div className='flex-1 flex flex-col justify-center text-white pl-14 text-xl'>
			<div className='w-full py-4'>Tiempo por nivel:
			 <input 
			 	id='time' 
				type="text" 
				size={2} 
				ref={userTime} 
				defaultValue={10} 
				className={`border ${handleBorder()} outline-none bg-transparent pl-1 w-10 rounded-md`} onChange={()=>setTime(userTime.current.value)} 
				onBlur={()=>handleBlur()}
				readOnly={handleInput()}
				 />
			</div>
			<div className='w-full py-4'>{`Nivel Actual: ${blindsLevels[currentLevel].smallBlind}/${blindsLevels[currentLevel].bigBlind}`}</div>
			<div className='w-full py-4'>{`Nivel Siguiente: ${blindsLevels[currentLevel+1].smallBlind}/${blindsLevels[currentLevel+1].bigBlind}`}</div>
		</div>
	)
}
